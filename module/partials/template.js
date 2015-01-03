angular.module('calendarModule').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('module/partials/calendar-days.html',
    "<div class=\"row days\"><div class=\"col-day text-right\" ng-repeat=\"days in constantCalendar.days track by $index\"><span ng-switch=\"$index\"><span ng-switch-when=\"6\" class=\"red\">{{days}}</span> <span ng-switch-when=\"5\" class=\"red\">{{days}}</span> <span ng-switch-default>{{days}}</span></span></div></div>"
  );


  $templateCache.put('module/partials/calendar-label.html',
    "<div class=\"calendar-label\"><div class=\"calendar-label-btn\">{{date | date:'yyyy.MM.dd'}}</div><div class=\"calendar-label-ico\" ng-click=\"click()\"><div class=\"ico-calendar\">&nbsp;</div></div></div>"
  );


  $templateCache.put('module/partials/calendar-view.html',
    "<div ng-show=\"show\" class=\"calendar-view\"><div class=\"label-close\">&nbsp;<div class=\"button-close\" ng-click=\"click()\"></div></div><div class=\"container-months\"><div class=\"block-month\"><daysweek></daysweek><div class=\"row\"><div class=\"col-2 btn-back\" ng-click=\"stepBack()\">&lt;</div><div class=\"col-8 name-month\">{{arrMonth.value | date:'MMMM yyyy'}}</div><div class=\"col-2 btn-forward\" ng-click=\"stepForward()\">&gt;</div></div><div class=\"numeric\"><div class=\"row\" ng-repeat=\"week in arrMonth track by $index\"><div class=\"col-day text-right {{day.class}}\" ng-repeat=\"day in arrMonth[$index] track by $index\" ng-click=\"selectEvent(day.value)\"><span ng-switch=\"$index\"><span ng-switch-when=\"6\" class=\"red\">{{day.value | date:'d'}}</span> <span ng-switch-when=\"5\" class=\"red\">{{day.value | date:'d'}}</span> <span ng-switch-default>{{day.value | date:'d'}}</span></span></div></div></div></div></div><div class=\"info-block\"><span>{{ date | date:'yyyy.MM.dd' }}</span></div></div>"
  );

}]);
