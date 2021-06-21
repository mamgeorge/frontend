// https://stackoverflow.com/questions/26416304/reading-csv-file-in-to-an-array-using-javascript

function fileReadArr( url ) {
	//
	if ( url == null || url == '' ) { url = 'file:///bibleTips2020.csv'; }
	let xhr = new XMLHttpRequest();
	xhr.open( 'GET' , url , true );
	xhr.setRequestHeader( 'Access-Control-Allow-Origin' , 'null' );
	xhr.setRequestHeader( 'Vary' , 'Origin' );
    xhr.setRequestHeader( 'Access-Control-Allow-Credentials', 'true' );
    xhr.setRequestHeader( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE' );
	// xhr.open( 'POST', url );
	// xhr.open( 'GET' , url , true );
	// xhr.open( 'GET' , url, headers );
	// xhr.withCredentials = true;
	// xhr.setRequestHeader( 'Access-Control-Allow-Origin' , '*' );
	// xhr.setRequestHeader( 'Access-Control-Allow-Origin' , 'null' );
	// xhr.setRequestHeader( 'Access-Control-Allow-Origin' , 'C:/Users/mamge/OneDrive/Documents/3Ministry/biblePlan/' );
	// xhr.setRequestHeader( 'Content-Type'		, 'application/json' );
	// xhr.setRequestHeader( 'Content-Type'		, 'application/x-www-form-urlencoded' );
	// xhr.setRequestHeader( 'Content-Type'		, 'text/csv' );
	// xhr.setRequestHeader( 'Accept'			, 'application/json' );
	// xhr.setRequestHeader( 'Authorization'	, this.auth.token );
	// xhr.setRequestHeader( 'Authorization'	, 'Bearer xxx.xxx.xxx' );
	// xhr.setRequestHeader( 'Cache-Control'	, 'no-cache' );
	// xhr.send( null );
	xhr.send( { 'request': 'authentication token' } );

	//
	let arrayVal = new Array();
	let txtLines = xhr.responseText;
	console.log( 'txtLines: ' + txtLines );
	//
	let jsonObject = txtLines.split(/\r?\n|\r/);
	for ( let ictr = 0; ictr < jsonObject.length ; ictr++ ) {
		//
		arrayVal.push( jsonObject[ ictr ].split( ',' ) ) ;
	}
	// retrived data from csv file content
	console.log( 'arrayVal: ' + arrayVal );
	return arrayVal;
}

function fileReadTxt( url ) {
	//
	if ( url == null || url == '' ) { url = 'bibleTips2020.csv'; }
	let txtLines  = '';
    let xhr = new XMLHttpRequest( );
    xhr.open( 'GET' , url , true );
	// xhr.withCredentials = true;
    xhr.onreadystatechange = function ( ) {
		//
        if( xhr.readyState === 4 ) {
			//
            if( xhr.status === 200 || xhr.status == 0 ) {
				//
                txtLines = xhr.responseText;
				console.log( 'txtLines: ' + txtLines );
            }
        }
    }
	xhr.send(null);
	// xhr.send({ 'request': 'authentication token' });
}

function fileParse( ) {
	//
	let txtHtml = '<table style = "width: 640px;" >';
	txtHtml += 	'<tr><th style = "width: 20%;" >date</th><th style = "width: 20%;" >day</th><th style = "width: 40%;" >morning</th><th style = "width: 20%;" >evening</th></tr>';
	txtHtml += 	'<tr id = "001" tabindex = "001" class = "blu" ><th>Jan 01/01</th><td>001</td><td>John 001	</td><td>Gen 01-03	</td></tr>';
	txtHtml += 	'<tr><th style = "width: 20%;" >date</th><th style = "width: 20%;" >day</th><th style = "width: 40%;" >morning</th><th style = "width: 20%;" >evening</th></tr>';
	txtHtml += 	'</table>';
	//
	fileReadText( 'file:///C:/Users/mamge/OneDrive/Documents/3Ministry/biblePlan/plan2020/biblePlan2020.cvs' );
	// Papa.parse(allText);
	document.getElementById( 'planDates' ).innerHTML = txtHtml;
}
//----

