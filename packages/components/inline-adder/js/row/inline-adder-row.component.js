export default {
    controller: class {
        constructor ($element, $timeout) {
            "ngInject";

            this.$element = $element;
            this.$timeout = $timeout;
        }

        $postLink () {
            this.$timeout(() =>
                this.$element.addClass("oui-inline-adder__row")
            );
        }
    }
};
