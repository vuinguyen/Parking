/**
 * @author Andrew Corliss
 */
function ParkingPicker(idtitle){
	var win = Ti.UI.createWindow({
		backgroundColor: '#fff',
		title: idtitle,
	});
	var picker = Ti.UI.createPicker({
		top: 0,
	});
	var data = [];
	data[0]=Ti.UI.createPickerRow({title:'1 Star'});
    data[1]=Ti.UI.createPickerRow({title:'2 Star'});
    data[2]=Ti.UI.createPickerRow({title:'3 Star'});
    data[3]=Ti.UI.createPickerRow({title:'4 Star'});
    data[4]=Ti.UI.createPickerRow({title:'5 Star'});
    data[5]=Ti.UI.createPickerRow({title:'6 Star'});
    data[6]=Ti.UI.createPickerRow({title:'7 Star'});
    data[7]=Ti.UI.createPickerRow({title:'8 Star'});
    data[8]=Ti.UI.createPickerRow({title:'9 Star'});
    data[9]=Ti.UI.createPickerRow({title:'10 Star'});
	picker.add(data);
	picker.selectionIndicator = true;
	var selectButton = Ti.UI.createButton({
		title: 'Set Review',
		top: 250
	});
	win.add(picker);
	win.add(selectButton);
	//Find Selected Row
	selectButton.addEventListener('change', function(events){
		Ti.API.info('You selected ' + picker.getSelectedRow(0).title + ' Review');
		alert('You selected ' + picker.getSelectedRow(0).title + ' Review')
	});
	return win;
	
};
module.exports = ParkingPicker;