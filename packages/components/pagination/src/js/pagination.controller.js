import clamp from 'lodash/clamp';
import range from 'lodash/range';

const MAX_THRESHOLD_MODE = {
  button: 5,
  select: 100,
};

export default class {
  constructor($attrs, $element, $timeout, ouiPaginationConfiguration) {
    'ngInject';

    this.$attrs = $attrs;
    this.$element = $element;
    this.$timeout = $timeout;
    this.config = ouiPaginationConfiguration;
    this.pageSizeList = this.config.pageSizeList.slice();
    this.pageSize = this.config.pageSize;
  }

  $postLink() {
    this.$timeout(() => this.$element
      .addClass('oui-pagination'));
  }

  $onChanges(changes) {
    // If pageSizeMax changes, recalculate pageSizeList...
    if (changes.pageSizeMax) {
      this.pageSizeList = this.config.pageSizeList.slice();
      this.pageSizeList.sort((a, b) => a - b);

      if (angular.isNumber(this.pageSizeMax)) {
        this.pageSizeList = this.pageSizeList
          .filter((pageSize) => pageSize <= this.pageSizeMax);

        // ... and add the max page size if necessary.
        if (this.pageSizeList.indexOf(this.pageSizeMax) < 0) {
          this.pageSizeList.push(this.pageSizeMax);
        }
      }
    }

    // Instead of recalculate these values on each digest,
    // values are calculated on each change concerning the table.
    // It avoids digest problems in ng-repeat.
    this.processPaginationChange();

    this.processTranslations();
  }

  processPaginationChange() {
    this.pageCount = this.getPageCount();
    this.currentPage = this.getCurrentPage();
    this.inputPage = this.getCurrentPage(); // Update model for input
    this.mode = this.getMode();
  }

  processTranslations() {
    this.translations = { ...this.config.translations };
    this.translations.ofNResults = this.translations.ofNResults
      .replace('{{totalItems}}', this.totalItems);
    this.translations.currentPageOfPageCount = this.translations.currentPageOfPageCount
      .replace('{{currentPage}}', this.currentPage)
      .replace('{{pageCount}}', this.pageCount);

    // For huge amount of pages, we replaced "{{currentPage}}" by a number input
    const translations = { ...this.config.translations };
    this.translations.inputPageOfPageCount = translations.currentPageOfPageCount
      .replace('{{pageCount}}', this.pageCount)
      .split('{{currentPage}}');
  }

  getMode() {
    if (!angular.isUndefined(this.$attrs.mode) && this.mode !== '') {
      return this.mode;
    }

    // Without 'mode' value, we select the 'mode' based on the pageCount
    if (this.pageCount <= MAX_THRESHOLD_MODE.button) {
      return 'button';
    }
    if (
      this.pageCount > MAX_THRESHOLD_MODE.button
      && this.pageCount <= MAX_THRESHOLD_MODE.select
    ) {
      return 'select';
    }
    return 'input';
  }

  getPageAriaLabel(page) {
    const pageOfPageCountText = this.config.translations.currentPageOfPageCount;
    return pageOfPageCountText
      .replace('{{currentPage}}', page)
      .replace('{{pageCount}}', this.pageCount);
  }

  onPageSizeChange(pageSize) {
    this.pageSize = pageSize;
    this.currentOffset = 1;

    // If page-size attribute is not set on the component (default value),
    // $onChanges is never triggered and other values are not calculated.
    // So these values have to be calculated here.
    if (!this.$attrs.pageSize) {
      this.processPaginationChange();
    }

    this.onPaginationChange();
  }

  onPageChange(page) {
    this.currentOffset = (this.pageSize * (page - 1)) + 1;
    this.currentPage = this.getCurrentPage();
    this.inputPage = this.getCurrentPage(); // Update model for input
    this.onPaginationChange();
  }

  checkPageRange(page) {
    const currentPage = Number.isInteger(page)
      ? clamp(page, 1, this.pageCount)
      : this.currentPage;

    this.onPageChange(currentPage);
  }

  getLastItemOffset() {
    return Math.min(this.currentOffset + this.pageSize - 1, this.totalItems);
  }

  getPageCount() {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  getCurrentPage() {
    return Math.floor((this.currentOffset - 1) / this.pageSize) + 1;
  }

  getPageRange() {
    return range(1, this.getPageCount() + 1);
  }

  onPaginationChange() {
    this.processTranslations();
    this.onChange({
      $event: {
        offset: this.currentOffset,
        pageSize: this.pageSize,
      },
    });
  }
}
