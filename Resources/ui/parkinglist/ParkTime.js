/**
 * @author Andrew Corliss
 */
function ParkTime(idtitle) {
	var Dbase = require('data/Dbase');
	var newData = new Dbase();
	//Running initial Query	
	var results = newData.getTEN();
	
	var win = Ti.UI.createWindow({
		title: idtitle,
		backgroundColor:'#fff'
		});
	 var tableData = [
	 /*
	 {title: 'Sugar Cube', color: 'black'},
	 {title: 'Standard Parking 17th Street', color: 'black'},
	 {title: 'California Street Garage', color: 'black'},
	 {title: 'Potatoes', color: 'black'}
	 */
	
	 ];
    
    var table = Ti.UI.createTableView({
      data: results,
    });
    //Add table update before row clicked
 	function populateData() {
 		var upResults = newData.getTEN();
		table.setData(upResults);
		//TI Bounty Hunter App Code to measure against
		//var results = db.list(_captured);			
		//tv.setData(results);
	}
	Ti.App.addEventListener('databaseUpdated', populateData);
	
	//run initial query
	//populateData();
    //Add in the table cell row clicked
    table.addEventListener('click', function(evt){
			var ParkTimeDetail = require('/ui/parkinglist/ParkTimeDetail');
			var parkingDetails = new ParkTimeDetail(evt.rowData.title, evt.rowData.id, evt.rowData.price, win);
			Ti.API.info('evt.rowData.id is: ' + evt.rowData.id);
			win.containingTab.open(parkingDetails);
		});
    win.add(table);
	return win;
	
};
module.exports = ParkTime;