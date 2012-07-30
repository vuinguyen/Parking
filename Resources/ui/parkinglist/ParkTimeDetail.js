/**
 * @author Andrew Corliss
 */
function ParkTimeDetail(idtitle, idNumber, idPrice, parentWindow) {
	//Create Call to open database
	var Dbase = require('data/Dbase');
	var newData = new Dbase();
	
	var win = Ti.UI.createWindow({
		backgroundColor: '#fff',
		title: idtitle,
		layout:'vertical'
	});
	var labelTitle = Ti.UI.createLabel({
		text: 'Parking Area Name:',
		color: '#000',
		top: 10,
		left: 5
	});
	var textTitle = Ti.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		value: idtitle,
		color: '#000',
		top: 10,
		width: 300,
	});
	var labelPrice = Ti.UI.createLabel({
		text: 'Price:',
		color: '#000',
		top: 5,
		width:50,
		left: 5
	});
	var textPrice = Ti.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		value: idPrice,
		color: '#000',
		top: 5,
		width: 300
	});
	var view = Ti.UI.createView({
		layout:'horizontal',
		height:50
	});
	var Rating = Ti.UI.createLabel({
		text: 'Rating:',
		color: '#000',
		top: 5,
		width:Ti.UI.SIZE,
		height: Ti.UI.SIZE,
		left: 25
	});
	var starlabel = Ti.UI.createLabel({
		color: '#000',
		width:Ti.UI.SIZE,
		height:Ti.UI.SIZE,
		left:5
	});
	var star = Ti.UI.createImageView({
		image: '/images/star.png',
		left: 5
	});
	//Add event Listener to open up Picker view
	star.addEventListener('click', function(){
		var ParkingPicker = require('/ui/parkinglist/ParkingPicker');
		var pickerDetails = new ParkingPicker();
		parentWindow.containingTab.open(pickerDetails);
	})
	view.add(Rating);
	view.add(starlabel);
	view.add(star);
	//Create Picker for Rating System
	//Create button for the checkins
	var but = Ti.UI.createButton({
		title: 'Check-In',
		top: 0
		});
	//Allow button to interact with the application
	but.addEventListener('click', function(e){
		//Pass data from Price textField and update Dbase
		//Pass name from textField and Update Dbase
		Ti.API.info(idNumber);
		newData.addCheckIn(textTitle.value, textPrice.value, idNumber);
		alert('You Checked in + 10 Points');
	});
	//Create the Editing Buttons for the Current Parking Structure
	/*var edit = Ti.UI.createButton({
		title: 'Edit'
	});
	var cancel = Ti.UI.createButton({
		title: 'Cancel',
		style: Titanium.UI.iPhone.SystemButtonStyle.DONE
	});
	//Add our Items back to the Window View
	//Add the Event listener to tell the app begin editing
	edit.addEventListener('click', function(){
		win.setRightNavButton(cancel);
		textTitle.editing = true,
		textPrice.editing = true
	});
	//Set up the cancel button to get out of editing
	win.setRightNavButton(cancel);
	cancel.addEventListener('click', function(){
		win.setRightNavButton(edit);
		textTitle.editing = false,
		textPrice.editing = false
	});
	*/
	//win.setRightNavButton(edit);
	win.add(labelTitle);
	win.add(textTitle);
	win.add(labelPrice);
	win.add(textPrice);
	win.add(view);
	//win.add(picker);
	win.add(but);
	return win;
};

module.exports = ParkTimeDetail;