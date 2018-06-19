function test2 (arrayA,arrayB){
	
	//j'ai utilisé un arbre binaire de recherche pour diminuer la complexité de n^2 à nlog(n)
	var ArbreBinaireA=new Object();
	for(var i in arrayA)
	{
		if(ArbreBinaireA[arrayA[i]]!=undefined)
			ArbreBinaireA[arrayA[i]]++;
		else
			ArbreBinaireA[arrayA[i]]=1;

	}
	
	
	var result=[];
	for(var i in arrayB)
	{
		if(ArbreBinaireA[arrayB[i]]!=undefined)
			result[i]=ArbreBinaireA[arrayB[i]];
		else
			result[i]=0;
		 
	}
	console.log(result)
}
