'use strict';

angular.module('rediApp')
  .controller('UserViewCtrl', function ($scope, $routeParams, User) {
  		$scope.viewUser = true;
  		var userObj = User.one($routeParams.id);
  		userObj.get().then(function(data) {
  			$scope.totalIncomes = 0,
  			$scope.totalExpenses = 0,
  			$scope.cash = 0;

  			$scope.user = data;
  			// incomes doughnut
  			$scope.incomesLabels = [data.incomes.category1.name, data.incomes.category2.name, data.incomes.category3.name];
  			$scope.incomesData = [data.incomes.category1.value, data.incomes.category2.value, data.incomes.category3.value];
  			// expenses doughnut
  			$scope.expensesLabels = [data.expenses.category1.name, data.expenses.category2.name, data.expenses.category3.name];
  			$scope.expensesData = [data.expenses.category1.value, data.expenses.category2.value, data.expenses.category3.value];

  			$scope.totalIncomes = data.incomes.category1.value + data.incomes.category2.value + data.incomes.category3.value;
  			$scope.totalExpenses = data.expenses.category1.value + data.expenses.category2.value + data.expenses.category3.value;
  			$scope.cash = $scope.totalIncomes - $scope.totalExpenses;

  			// total pie
  			//$scope.totalLabels = ['Total Ingresos', 'Total Gastos', 'Ahorro'];
  			//$scope.totalData = [$scope.totalIncomes, $scope.totalExpenses, $scope.cash];
  			$scope.totalTime = ['Hoy'];
			$scope.totalLabels = ['Ingresos', 'Gastos', 'Balance'];

			$scope.totalData = [
			    [100],
			    [($scope.totalExpenses * 100 / $scope.totalIncomes)],
			    [($scope.cash * 100 / $scope.totalIncomes)]
		  	];
  		});
  });
