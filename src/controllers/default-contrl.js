app.controller('defaultContrl', ['$scope', '$interval',function($scope, $interval){
	$scope.date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
	/*$interval(function(){
		$scope.before = new Date().getTime();
	},1000)*/
}])
