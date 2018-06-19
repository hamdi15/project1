function test1 (strA,strB){
	
	//j'ai utilisé un arbre binaire de recherche pour diminuer la complexité de n^2 à nlog(n)
	var ArbreBinaireA=new Object();
	for(var i in strA)
	{
		if(ArbreBinaireA[strA[i]]!=undefined)
			ArbreBinaireA[strA[i]]++;
		else
			ArbreBinaireA[strA[i]]=1;

	}
	
	var ArbreBinaireB=new Object();
	for(var i in strB)
	{
		if(ArbreBinaireB[strB[i]]!=undefined)
			ArbreBinaireB[strB[i]]++;
		else
			ArbreBinaireB[strB[i]]=1;

	}
	var nbde=0;
	for(var i in ArbreBinaireA)
	{
		if(ArbreBinaireB[i]==undefined)
			nbde+=ArbreBinaireA[i];
		else if(ArbreBinaireA[i]>ArbreBinaireB[i])
			nbde+=ArbreBinaireA[i]-ArbreBinaireB[i];
		else if(ArbreBinaireA[i]<ArbreBinaireB[i])
			nbde+=ArbreBinaireB[i]-ArbreBinaireA[i];

	}
	return nbde;
}
