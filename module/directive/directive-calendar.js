calendarModule.directive('calendar', ['$compile', '$templateCache', 'constantCalendar', function ($compile, $templateCache, constantCalendar) {
    function formatMonth(date, _selectDate) {
        var dateNowValue = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime();
        var selectDate = new Date(_selectDate.getFullYear(), _selectDate.getMonth(), _selectDate.getDate()).getTime();

        function checkCurrentDate(d) {
            var _class = ''
            if (dateNowValue == d.getTime()) {
                _class+='current'
            }
            if(selectDate==d.getTime()){
                _class+=' select'
            }
            return _class
        }

        var array = [];
        for (var i = 0; i < 50; i++) {
            var d = new Date(date.getFullYear(), date.getMonth(), i)
            if (d.getMonth() == date.getMonth()) {
                array.push({
                    date: d,
                    value: d.getTime(),
                    dayWeek: d.getDay(),
                    class: checkCurrentDate(d)
                })
            }
        }

        var fillBefore = (array[0].dayWeek == 0) ? 6 : array[0].dayWeek - 1;
        var fillAfter = 7 - array[array.length - 1].dayWeek;
        for (var i = 0; i < fillBefore; i++) {
            array.unshift(null)
        }
        for (var i = 0; i < fillAfter; i++) {
            array.push(null)
        }

        var rows = parseFloat((array.length / 7).toFixed(0));
        var arrMonth = [];
        var k = 0
        for (var i = 0; i < rows; i++) {
            arrMonth[i] = [];
            for (var d = 0; d < 7; d++) {
                arrMonth[i].push(array[k])
                k++;
            }

        }
        return arrMonth
    }

    return {
        restrict: 'EA',
        replace: true,
        templateUrl: 'module/partials/calendar-label.html',
        scope: {
            date: '=date'
        },
        controller: ['$scope', '$element', '$attrs', '$timeout', '$templateCache', function ($scope, $element, $attrs, $timeout, $templateCache) {
            var content = null;
            $scope.show = false;
            $scope.constantCalendar = constantCalendar;
            var dateCalendar = $scope.date
            var viewMonth =  $scope.date.getMonth();

            $scope.arrMonth = formatMonth( $scope.date, $scope.date);
            $scope.arrMonth.value =  $scope.date.getTime();

            $scope.stepBack = function(){
                viewMonth--
                regen(viewMonth)
            }
            $scope.stepForward = function(){
                viewMonth++
                regen(viewMonth)
            }
            $scope.selectEvent = function(val){
                $scope.date = new Date(val)
                $scope.arrMonth = formatMonth( $scope.date, $scope.date);
                $scope.arrMonth.value =  $scope.date.getTime();
            }

            function regen(month){
                var date = new Date($scope.date.getFullYear(), month, $scope.date.getDate())
                $scope.arrMonth = formatMonth(date,  $scope.date);
                $scope.arrMonth.value = date.getTime();
            }

            function init() {
                var linkFn = $compile($templateCache.get('module/partials/calendar-view.html'));
                content = linkFn($scope);
                $element.append(content);
            }

            $scope.click = function () {
                if (!content) {
                    init()
                }
                $scope.show = !$scope.show
            }
        }]
    }
}])