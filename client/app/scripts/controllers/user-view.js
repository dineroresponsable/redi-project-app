'use strict';

angular.module('rediApp')
  .controller('UserViewCtrl', function ($scope, $routeParams, User) {
  		$scope.viewUser = true;
  		var userObj = User.one($routeParams.id);
  		userObj.get().then(function(data) {
  			var totalIncomes = 0,
  				totalExpenses = 0,
  				cash = 0;

  			$scope.user = data;
  			// incomes doughnut
  			$scope.incomesLabels = [data.incomes.category1.name, data.incomes.category2.name, data.incomes.category3.name];
  			$scope.incomesData = [data.incomes.category1.value, data.incomes.category2.value, data.incomes.category3.value];
  			// expenses doughnut
  			$scope.expensesLabels = [data.expenses.category1.name, data.expenses.category2.name, data.expenses.category3.name];
  			$scope.expensesData = [data.expenses.category1.value, data.expenses.category2.value, data.expenses.category3.value];

  			totalIncomes = data.incomes.category1.value + data.incomes.category2.value + data.incomes.category3.value;
  			totalExpenses = data.expenses.category1.value + data.expenses.category2.value + data.expenses.category3.value;
  			cash = totalIncomes - totalExpenses;

  			// total pie
  			$scope.totalLabels = ['Total Ingresos', 'Total Gastos', 'Ahorro'];
  			$scope.totalData = [totalIncomes, totalExpenses, cash];
  		});
  });
