/**
 * @author Andrew Corliss
 */


//Call Class, 
function CheckWindow(idtitle, mapBoolean) {
	//Create Longitude and Latitude Calls
	var Lattitude = 39.74;
	var Longitude = -104.99;
	//state variable and ui call along with basic features
	var win = Ti.UI.createWindow({
		title: idtitle,
		backgroundColor:'#fff'
		});	
	//add map view
	var mapview;
	
	//Add mapview after window opens
	/*self.addEventListener('open', function(){
		if (mapview !== undefined) {
			return;
		}*/
		
		mapview = Titanium.Map.createView({
			mapType: Titanium.Map.STANDARD_TYPE,
			region: {
	    		latitude: Lattitude, 
	    		longitude: Longitude,
		        latitudeDelta: 0.1, 
		        longitudeDelta: 0.1
		    },
		    animate:true,
		    regionFit:true,
		    userLocation:false,
		});
		//Begin Adding First 10 Dbase Map Annotations
		var Dbase = require('data/Dbase');
		var newData = new Dbase();
		
		Ti.App.addEventListener('databaseUpdated', populateData);
		
		//Function for Loop
		function populateData() {
			var results = newData.getTEN();
		for (var i = 0; i < results.length; i++) {
			mapview.addAnnotation(
				Ti.Map.createAnnotation({
					animate: true,
					pincolor: Titanium.Map.ANNOTATION_GREEN,
					title: results[i].name, //+ ', $' + results[i].price,
					latitude: results[i].latitude,
					longitude: results[i].longitude
				})
			); // end mapView.addAnnotation
		}//end For Loop
		}//End Function Call
		//Call function
		populateData();
		//Now listen for our Database update
		
		//To update map data first listen for event
		//When event triggers we need to call DB with update (getTEN())
		//replace existing annotation
		//Finally place new annotation on map
		//Add initial Annotation
		/*		
		mapview.addAnnotation(Ti.Map.createAnnotation({
			animate: true,
			pincolor: Titanium.Map.ANNOTATION_RED,
			title: 'Denver',
			latitude: Lattitude,
			longitude: Longitude
		}));
		mapview.addAnnotation(Ti.Map.createAnnotation({
			animate: true,
			pincolor: Titanium.Map.ANNOTATION_GREEN,
			title: 'Standard Parking 17th',
			latitude: 39.749557,
			longitude: -104.995757
		}));
		mapview.addAnnotation(Ti.Map.createAnnotation({
			animate: true,
			pincolor: Titanium.Map.ANNOTATION_GREEN,
			title: 'Sugar Cube',
			latitude: 39.749992,
			longitude: -104.999921
		}));
		mapview.addAnnotation(Ti.Map.createAnnotation({
			animate: true,
			pincolor: Titanium.Map.ANNOTATION_PURPLE,
			title: 'California Street Garage',
			latitude: 39.745351,
			longitude: -104.992018
			//rightButton: '/KS_nav_ui.png'
		}));
		*/
		
		if (mapBoolean){
			win.add(mapview);
		}
		
		//Add in the Check-in feature
		/*
		mapview.addEventListener('click', function(evt){
			Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
			if (evt.clicksource == 'rightButton') {
				Ti.API.info("Annotation " + evt.title + ", right button clicked.");
			}
		});
		*/
		return win;
	};
//CheckWindow.prototype.functionname
//Insert our mapping function

module.exports = CheckWindow;
