(function () {
	// body...
'use strict'
angular.module('myFistApp',[])
.controller('myController',myController);


function myController($scope)
{
	$scope.mensaje="";
	$scope.palabra="";
	$scope.process=function () 
	{

		$scope.mensaje=updateMessaje(calculateAmount($scope.palabra));
	}


}



//split the word by comma

function calculateAmount(word_separate_coma){
	var listWord=word_separate_coma.split(",");
	console.log(listWord[0])
	if(listWord.length==1&&listWord[0]=="")
		return 0;
	return listWord.length;
}
//return mensaje depending an amount

function updateMessaje(amount)
{
	if(amount==0)
		{
			return "Please enter data first";
		}
	else
	{
		if(amount<=3)
		{
			return "Enjoy!";
		}
		else
		{
			return "too much";
		}
	}

}
})();
