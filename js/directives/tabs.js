angular.module('ionic')
    .directive('ionTabs', ['$ionicPlatform', function ($ionicPlatform) {
        return {
            restrict: 'E',
            compile: function (element, attrs) {
                if(!attrs.hasOwnProperty('noRipple')) {
                    element.addClass('mdl-js-tabs mdl-js-ripple-effect');
                }

                $ionicPlatform.ready(function () {
                    // MDL should register and upgrade our element automatically,
                    // however lets make sure it's upgraded when we compile
                    componentHandler.upgradeElement(element[0], 'MaterialTabs');
                    componentHandler.upgradeElement(element[0], 'MaterialRipple');
                });
            }
        }
    }]);
