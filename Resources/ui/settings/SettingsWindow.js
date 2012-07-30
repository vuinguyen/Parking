/**
 * @author Andrew Corliss
 */
function SettingsWindow() {
	var win = Ti.UI.createWindow({
		title: 'Settings',
		backgroundColor:'#fff',
		layout: 'vertical'
		});
	var view = Ti.UI.createView({
		layout: 'horizontal',
		top: 5,
		height: 50
	});
	var label1 = Ti.UI.createLabel({
		text: 'Current Location',
		left: 5,
		color: 'black',
		height: Ti.UI.SIZE
	});
	var basicSwitch = Ti.UI.createSwitch({
		value: true,
		left: 50
	});
	view.add(label1);
	view.add(basicSwitch);
	basicSwitch.addEventListener('change',function(e){
      Ti.API.info('Switch value: ' + basicSwitch.value);
    });

    var view2 = Ti.UI.createView({
    	layout:'horizontal',
    	top: 0,
    	height: 50
    });
    var label2 = Ti.UI.createLabel({
    	text: 'Set Distance',
    	height: Ti.UI.SIZE,
    	left: 5
    });
    var slider = Ti.UI.createSlider({
    	min: 0,
        max: 100,
        width: '50%',
        value: 50
     });
     /*
     slider.addEventListener('change', function(e) {
        label.text = String.format("%3.1f", e.value);
    });
    */
    view2.add(label2);
   	view2.add(slider);
 
    var view3 = Ti.UI.createView({
    	layout: 'horizontal',
    	top: 30,
    	height: 'auto',
    	width: 'auto'
    });
    var upDatas = Ti.UI.createButton({
    	title: 'Update',
    	width: '100%',
    	height: 50,
    });
  upDatas.addEventListener('click', function(){
  	var WebServiceCall = require('data/WebServiceCall');
	new WebServiceCall();
	var Dbase = require('data/Dbase');
	var newDbase = new Dbase();
	newDbase.dropDBTable();
	var WebServiceCall = require('data/WebServiceCall');
	new WebServiceCall();
  });
    view3.add(upDatas);
     win.add(view);
     win.add(view2);
     win.add(view3);
	return win;
};

module.exports = SettingsWindow;
