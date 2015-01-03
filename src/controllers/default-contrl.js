app.controller('defaultContrl', ['$scope', '$interval',function($scope, $interval){
	$scope.date = new Date(new Date().getFullYear(), new Date().getMonth()-4, new Date().getDate());
	/*$interval(function(){
		$scope.before = new Date().getTime();
	},1000)*/
}])
