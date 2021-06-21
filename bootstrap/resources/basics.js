// basics.js
/*
	function dateTime( dateOld )
	function dateTimeFormat( dateOld , varFormat )
	function docReflection( )
	function adjustTableHeight( varHeightAdjust )
	function adjustTableWidthHeight( varWidthAdjust , varHeightAdjust )
	function popupNote( anyNotes )
*/
var varUserAgent ;
if( navigator.userAgent.indexOf( "MSIE" ) != -1 )	{ varUserAgent = 'MSIE' ; }
if( navigator.userAgent.indexOf( "Firefox" )!=-1 )	{ varUserAgent = 'Fire' ; }
if( navigator.userAgent.indexOf( "Netscape" )!=-1 )	{ varUserAgent = 'Nets' ; }

function includeHTML( )
{
	var tags , ictr , elmnt , file , xhttp ;
	/*loop through a collection of all HTML elements:*/
	tags = document.getElementsByTagName( "*" ) ;
	for ( ictr = 0 ; ictr < tags.length ; ictr++ )
	{
		elmnt = tags[ ictr ] ;
		/*search for elements with a certain atrribute:*/
		file = elmnt.getAttribute( "w3-include-html" ) ;
		if ( file )
		{
			/*make an HTTP request using the attribute value as the file name:*/
			xhttp = new XMLHttpRequest( ) ;
			xhttp.onreadystatechange = function( )
			{
				if ( this.readyState == 4 ) {
					if ( this.status == 200 ) { elmnt.innerHTML = this.responseText ; }
					if ( this.status == 404 ) { elmnt.innerHTML = "Page not found." ; }
					/*remove the attribute , and call this function once more:*/
					elmnt.removeAttribute( "w3-include-html" ) ;
					includeHTML( ) ;
			 	}
			}
			xhttp.open( "GET" , file , true ) ;
			xhttp.send( ) ;
			/*exit the function:*/
			return ;
		 }
	 }
 }

//
function dateTime( dateOld )
{
	var dateNew = new Date( ) ;
	if ( dateOld != null && dateOld != '' ) { dateNew = dateOld ; }

	var dateYear	= dateNew.getFullYear( ) ;
	var dateMonth	= new String( dateNew.getMonth( )+1 ) ;
	var dateDay		= new String( dateNew.getDate( ) ) ;
	var timeHour	= dateNew.getHours( ) ; if ( timeHour>12 ) { timeHour = new String( timeHour - 12 ) ; } else { timeHour = new String( timeHour ) ; }
	var timeMinutes	= new String( dateNew.getMinutes( ) ) ;
	var timeSeconds	= new String( dateNew.getSeconds( ) ) ;
	var timeMilliseconds = new String( dateNew.getMilliseconds( ) ) ;
	//
	if ( dateMonth.length	<2 )	{ dateMonth		= '0' + dateMonth ;	 }
	if ( dateDay.length		<2 )	{ dateDay		= '0' + dateDay ;	 }
	if ( timeHour.length	<2 )	{ timeHour		= '0' + timeHour ;	 }
	if ( timeMinutes.length	<2 )	{ timeMinutes	= '0' + timeMinutes ; }
	if ( timeSeconds.length	<2 )	{ timeSeconds	= '0' + timeSeconds ; }
	//
	var dateTotal = dateYear + '/' + dateMonth + '/' + dateDay ;
	var timeTotal = timeHour + ':' + timeMinutes + ':' + timeSeconds + '.' + timeMilliseconds ;
	var dateTimeFormatted = '' + dateTotal + ' - ' + timeTotal ;
	return dateTimeFormatted ;
 }
//
function dateTimeFormat( dateOld , varFormat )
{
	var dateTimeFormatted = '' ;
	var dateNew = new Date( ) ;
	if ( dateOld != null && dateOld != '' ) { dateNew = dateOld ; }

	var dateYear	= dateNew.getFullYear( ) ;
	var dateMonth	= new String( dateNew.getMonth( )+1 ) ;
	var dateDay		= new String( dateNew.getDate( ) ) ;
	var timeHour	= dateNew.getHours( ) ; if ( timeHour>12 ) { timeHour = new String( timeHour - 12 ) ; } else { timeHour = new String( timeHour ) ; }
	var timeMinutes	= new String( dateNew.getMinutes( ) ) ;
	var timeSeconds	= new String( dateNew.getSeconds( ) ) ;
	var timeMilliseconds = new String( dateNew.getMilliseconds( ) ) ;
	//
	if ( dateMonth.length	<2 )	{ dateMonth		= '0' + dateMonth ;	 }
	if ( dateDay.length		<2 )	{ dateDay		= '0' + dateDay ;	 }
	if ( timeHour.length	<2 )	{ timeHour		= '0' + timeHour ;	 }
	if ( timeMinutes.length	<2 )	{ timeMinutes	= '0' + timeMinutes ; }
	if ( timeSeconds.length	<2 )	{ timeSeconds	= '0' + timeSeconds ; }
	//
	// alert ( 'dateOld: ' + dateOld + ' , varFormat' + varFormat ) ;
	if ( varFormat == '' || varFormat == ' ' || varFormat == 0 || varFormat == null ) { varFormat = 0 ; }
	if ( varFormat==1 ) // 'yyyy/mm/dd - HH:MM:SS.mmmm
	{
		var dateTotal = dateYear + '/' + dateMonth + '/' + dateDay ;
		var timeTotal = timeHour + ':' + timeMinutes + ':' + timeSeconds + '.' + timeMilliseconds ;
		dateTimeFormatted = '' + dateTotal + ' - ' + timeTotal ;
	 }
	else // varFormat=0 or varFormat='mm/dd/yyyy'
	{
		var dateTotal = dateMonth + '/' + dateDay + '/' + dateYear ;
		dateTimeFormatted = dateTotal ;
	 }
	return dateTimeFormatted ;
 }
//
function docReflection( )
{
	var delimiter = '<br />' ;
	var delim1 = '<tr><th class = "" style = "text-align: left ;" ><b>' ;
	var delim2 = '</b></th><td class = "" >' ;
	var delim3 = '&nbsp ;</td></tr>' ;

	strReflect = strReflect + '<br /><center><table border = "1" width = "100%" >' ;
	strReflect = strReflect + delim1 + "title"			+ delim2 + document.title				+ delim3 ;
	strReflect = strReflect + delim1 + "clientWidth"	+ delim2 + document.body.clientWidth	+ delim3 ;
	strReflect = strReflect + delim1 + "clientHeight"	+ delim2 + document.body.clientHeight	+ delim3 ;

	delim1 = '<tr><th class = "cont" ><b>' ;
	delim2 = '</b></th><td style = "background: url( \'xtra/images/backStripes.gif\' ) ;" >' ;
	strReflect = strReflect + delim1 + "pageXOffset"	+ delim2 + window.pageXOffset			+ delim3 ;
	strReflect = strReflect + delim1 + "pageYOffset"	+ delim2 + window.pageYOffset			+ delim3 ;
	strReflect = strReflect + delim1 + "availWidth."	+ delim2 + window.screen.availWidth		+ delim3 ;
	strReflect = strReflect + delim1 + "availHeight"	+ delim2 + window.screen.availHeight	+ delim3 ;
	strReflect = strReflect + delim1 + "location"		+ delim2 + window.location				+ delim3 ;
	strReflect = strReflect + delim1 + "hash"			+ delim2 + window.location.hash			+ delim3 ;
	strReflect = strReflect + delim1 + "host"			+ delim2 + window.location.host			+ delim3 ;
	strReflect = strReflect + delim1 + "hostname"		+ delim2 + window.location.hostname		+ delim3 ;
	strReflect = strReflect + delim1 + "href"			+ delim2 + window.location.href			+ delim3 ;
	strReflect = strReflect + delim1 + "pathname"		+ delim2 + window.location.pathname		+ delim3 ;
	strReflect = strReflect + delim1 + "port"			+ delim2 + window.location.port			+ delim3 ;
	strReflect = strReflect + delim1 + "protocol"		+ delim2 + window.location.protocol		+ delim3 ;
	strReflect = strReflect + delim1 + "search.."		+ delim2 + window.location.search		+ delim3 ;

	delim1 = '<tr><th class = "" style = "text-align: left ;" ><b>' ;
	delim2 = '</b></th><td class = "" >' ;
	strReflect = strReflect + delim1 + "appCodeName"	+ delim2 + navigator.appCodeName		+ delim3 ;
	strReflect = strReflect + delim1 + "appName"		+ delim2 + navigator.appName			+ delim3 ;
	strReflect = strReflect + delim1 + "appVersion"		+ delim2 + navigator.appVersion			+ delim3 ;
	strReflect = strReflect + delim1 + "language"		+ delim2 + navigator.language			+ delim3 ;
	strReflect = strReflect + delim1 + "mimeTypes"		+ delim2 + navigator.mimeTypes.length	+ delim3 ;
	strReflect = strReflect + delim1 + "platform"		+ delim2 + navigator.platform			+ delim3 ;
	strReflect = strReflect + delim1 + "plugins"		+ delim2 + navigator.plugins.length		+ delim3 ;
	strReflect = strReflect + delim1 + "userAgent"		+ delim2 + navigator.userAgent			+ delim3 ;
	strReflect = strReflect + '</table></center><br />' ;
	return strReflect ;
 }
//
function adjustTableHeight( varHeightAdjust )
{
	// <body onresize = "adjustTableHeight( 350 ) ;" >
	// <script> adjustTableHeight( 350 ) ; </script>
	// document.all.div0.style.width = document.body.clientWidth * 0.90 ;
	//
	var varHeightTemp = document.body.clientHeight - varHeightAdjust ;
	if ( varHeightTemp < 1 ) { varHeightTemp = 1 ; }
	document.all.div0.style.height = varHeightTemp ;
	document.all.div0.style.overflow = 'auto' ;
 }
//
function adjustTableWidthHeight( varWidthAdjust , varHeightAdjust )
{
	// <body onresize = "adjustTableHeight( 350 ) ;" >
	// <script> adjustTableHeight( 350 ) ; </script>
	if ( varWidthAdjust==0 || varWidthAdjust=='' || varWidthAdjust==null ) { varWidthAdjust = 0.90 ; }
	document.all.div0.style.width = document.body.clientWidth * varWidthAdjust ;
	//
	var varHeightTemp = document.body.clientHeight - varHeightAdjust ;
	if ( varHeightTemp < 1 ) { varHeightTemp = 1 ; }
	document.all.div0.style.height = varHeightTemp ;
	document.all.div0.style.overflow = 'auto' ;
 }
// popup window function
var anyURL ;
function popupOptions( anyURL , wdth , hght )
{
	if ( wdth == 0 ) { wdth = 400 ; }
	if ( hght == 0 ) { hght = 200 ; }
	var popX = ( screen.width/2 )-( wdth/2 ) ;
	var popY = ( screen.height/2 )-( hght/2 ) ;
	var varOpts = 'scrollbars=1 , resizable=1 , menubar=0 , location=0 , directories=0 , toolbar=0 , status=0' ;
	var varStrg = 'width=' + wdth + ' , height=' + hght + ' , top=' + popY + ' , left=' + popX + ' , ' + varOpts ;
	var varWindow = window.open( anyURL , 'popupOptions' , varStrg ) ;
	varWindow.self.focus( ) ;
	return ;
 }
// popup window function
var anyURL ;
function popupNote( anyNotes )
{
	var wdth = 400 , hght = 200 ;
	var popX = ( screen.width/2 )-( wdth/2 ) ;
	var popY = ( screen.height/2 )-( hght/2 ) ;
	var varOpts = 'scrollbars=0 , resizable=0 , menubar=0 , location=0 , directories=0 , toolbar=0 , status=0' ;
	var varStrg = 'width=' + wdth + ' , height=' + hght + ' , top=' + popY + ' , left=' + popX + ' , ' + varOpts ;
	var varWindow = window.open( '' , 'popupNote' , varStrg ) ;
	varWindow.document.writeln( '<html><head><title>HOG</title>' ) ;
//	varWindow.document.writeln( '<script> setTimeout( 'self.close( )' , 5000 ) ; <\/script>' ) ;
	varWindow.document.writeln( '<link rel = "StyleSheet" href = "styleAny.css" type = "text/css" />' ) ;
	varWindow.document.writeln( '</head><body><center><h3>MLG</h3><br /><br />' ) ;
	varWindow.document.writeln( anyNotes ) ;
	varWindow.document.writeln( '</center></body</html>' ) ;
	varWindow.self.focus( ) ;
	return ;
 }
