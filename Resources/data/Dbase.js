/**
 * @author Andrew Corliss
 */
function Dbase()
{
	this.db = Ti.Database.open('Locations');
    this.db.execute('CREATE TABLE IF NOT EXISTS locations(id INTEGER PRIMARY KEY, name TEXT, capturedLong REAL, capturedLat REAL, score INTEGER, price TEXT);');
   
    this.db.close();
     Ti.API.info('instantiating Dbase');
};


Dbase.prototype.add = function(data)
{
	Ti.API.info('add is being called');	

	this.db = Ti.Database.open('Locations');
	for (var i = 0; i < data.length; i++)
	{
		this.db.execute("INSERT INTO locations(name, capturedLong, capturedLat) VALUES(?,?,?)", data[i].name, data[i].longitude, data[i].latitude);
	//	Ti.API.info('data[i].name is ' + data[i].name + ' data[i].longitude ' + data[i].longitude);
	}
	Ti.API.info('After for loop in add :) ');
	var result = this.db.execute('SELECT name FROM locations WHERE name != "null" LIMIT 1');
	Ti.API.info("result " + result);
	this.db.close();
	
};



Dbase.prototype.get = function()
{
	this.db = Ti.Database.open('Locations');
	var results = [];
	var result = this.db.execute('SELECT * FROM locations');
	while (result.isValidRow()) {
		results.push({
			//add these attributes for the benefit of a table view
			name: result.fieldByName('name'),
			longitude: result.fieldByName('capturedLong'), //custom data attribute to pass to detail page
			latitude: result.fieldByName('capturedLat')
		});
		Ti.API.info('name is ' + result.fieldByName('name') + ', longitude' + result.fieldByName('capturedLong'));
		result.next();
	}
	result.close(); //make sure to close the result set
	this.db.close();
	return results;
};

Dbase.prototype.getTEN = function()
{
	this.db = Ti.Database.open('Locations');
	var results = [];
	var result = this.db.execute('SELECT * FROM locations LIMIT 10');
	while (result.isValidRow()) {
		results.push({
			//add these attributes for the benefit of a table view
			name: (result.fieldByName('name')) ? result.fieldByName('name') : 'Parking' + ' ' + result.fieldByName('id'),
			longitude: result.fieldByName('capturedLong'), //custom data attribute to pass to detail page
			latitude: result.fieldByName('capturedLat'),
			//title: (result.fieldByName('name')) ? result.fieldByName('name') + ', $' + result.fieldByName('price') : 'Parking' + ' ' + result.fieldByName('id'),
			title: (result.fieldByName('name')) ? result.fieldByName('name') : 'Parking' + ' ' + result.fieldByName('id'),
			id: result.fieldByName('id'),
			price: result.fieldByName('price'),
			color: 'black'
		});
		Ti.API.info('name is ' + result.fieldByName('name') + ', longitude' + result.fieldByName('capturedLong'));
		result.next();
	}
	result.close(); //make sure to close the result set
	this.db.close();
	return results;
};

Dbase.prototype.addCheckIn = function(_name,_price,_id){
	this.db = Ti.Database.open('Locations');
	Ti.API.info('Parking Lot Name ' + _name);
	this.db.execute("UPDATE locations SET name = ?, price = ? WHERE id = ?",_name,_price,_id);
	//db.execute("UPDATE fugitives SET captured = 1, capturedLat = ?, capturedLong = ? WHERE id = ?",_lat,_lng,_id);
	this.db.close();

	//Dispatch a message to let others know the database has been updated
	Ti.App.fireEvent("databaseUpdated");
}

Dbase.prototype.dropDBTable = function(){
	this.db = Ti.Database.open('Locations');
	this.db.execute("DROP TABLE locations");
	//db.execute("UPDATE fugitives SET captured = 1, capturedLat = ?, capturedLong = ? WHERE id = ?",_lat,_lng,_id);
	this.db.close();

	//Dispatch a message to let others know the database has been update
}
module.exports = Dbase;