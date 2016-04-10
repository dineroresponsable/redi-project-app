'use strict';

angular.module('rediApp')
  .controller('UserViewCtrl', function ($scope, $routeParams, User) {
  		$scope.viewUser = true;
      window.scrollTo(0, 0);
  		var userObj = User.one($routeParams.id);
  		userObj.get().then(function(data) {
  			$scope.totalIncomes = 0;
  			$scope.totalExpenses = 0;
  			$scope.cash = 0;

  			$scope.user = data;
        $scope.chartColours = ['#64A75B', '#EA9049', '#3887C2', '#0098C0', '#E06865', '#91C27E'];

        // total values
        $scope.totalIncomes = data.incomes.category1.value + data.incomes.category2.value + data.incomes.category3.value;
        $scope.totalExpenses = data.expenses.category1.value + data.expenses.category2.value + data.expenses.category3.value + data.expenses.category4.value + data.expenses.category5.value + data.expenses.category6.value;
        $scope.cash = $scope.totalIncomes - $scope.totalExpenses;

        $scope.chartOptions = {
          multiTooltipTemplate : function (label) {
            return label.datasetLabel + ': ' +    label.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
          },
          legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%> $<%= segments[i].value %><%}%></li><%}%></ul>"
        };

  			// incomes pie
  			$scope.incomesLabels = [data.incomes.category1.name, data.incomes.category2.name, data.incomes.category3.name];
  			$scope.incomesData = [data.incomes.category1.value, data.incomes.category2.value, data.incomes.category3.value];

  			// expenses pie
  			$scope.expensesLabels = [data.expenses.category1.name, data.expenses.category2.name, data.expenses.category3.name, data.expenses.category4.name, data.expenses.category5.name, data.expenses.category6.name];
  			$scope.expensesData = [data.expenses.category1.value, data.expenses.category2.value, data.expenses.category3.value, data.expenses.category4.value, data.expenses.category5.value, data.expenses.category6.value];

        // total bars chart
  			$scope.totalTime = ['Hoy'];
			  $scope.totalLabels = ['Ingresos', 'Gastos', 'Balance'];
			  $scope.totalData = [
			    [100],
			    [($scope.totalExpenses * 100 / $scope.totalIncomes)],
			    [($scope.cash * 100 / $scope.totalIncomes)]
		  	];
  		});
  });
