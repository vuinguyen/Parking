/**
 * @author Andrew Corliss
 */
// To make this app work for you, create your own cartodb.com account
// and add the proper parameters for start_url and api_key here
function WebServiceCall() {
		var Dbase = require('data/Dbase');
		var start_url = "http://-addyourowncartodbaccounturlhere-sql?q="; // add your own cartodb account url here
		var sql_request = "SELECT cartodb_id,ST_asGeoJSON(the_geom), name FROM small_point"
		var api_key = "&api_key=-addyourownAPIkeyhere-" // add your own API key here
		var url = start_url + sql_request + api_key;
		Ti.API.info("Url Input: " + url);
		var xhr = Ti.Network.createHTTPClient({
			onload: function(e){
				Ti.API.debug(this.responseText);
				var json = JSON.parse(this.responseText);
				var len = json.rows.length;
				var data = [];
				
				
				for(i =0; i < len; i++){
				var json_coor = JSON.parse(json.rows[i].st_asgeojson);
				var coor = json_coor.coordinates;
					data.push({
			//add these attributes for the benefit of a table view
			name: json.rows[i].name,
			longitude: parseFloat(coor[0]), //custom data attribute to pass to detail page
			latitude: parseFloat(coor[1]),
			
					});
				Ti.API.info("Name:" + json.rows[i].name + " Longitude: " + parseFloat(coor[0])+ " Latitude: " + parseFloat(coor[1]));	
				} // end for loop
				
				//Ti.API.info('Before calling db stuff');
				
				Ti.API.info('Before calling new');
				var database = new Dbase();
				Ti.API.info('Before calling add');
				database.add(data);	
				Ti.API.info('After calling db stuff');
				//var results = database.get();
				//Ti.API.info(typeof results);

			},
			onerror: function(e){
				Ti.API.info('error, HTTP status = ' + this.status);
				alert(e.error);
			},
			timeout:5000//in miliseconds
		});
		xhr.open("GET", url);
		
		
		xhr.send();
		Ti.API.info('Printing to the console');
};
module.exports = WebServiceCall;