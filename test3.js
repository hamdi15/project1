function test3 (url){
	var nbparte=1
	var len=url.length;
	if(len==0)nbparte=0;
	for(i=0;i<len;i++)
	{
		
		if(url[i]==".")
			nbparte++;
		else if(!((url[i].toUpperCase()>='A' && url[i].toUpperCase()<='Z')|| (url[i].toUpperCase()>='0' && url[i].toUpperCase()<='9') || (url[i]=='_') || (url[i]=='-')))
		{
			return 0
			
		}
		
		
	}
	return nbparte;
	
}
