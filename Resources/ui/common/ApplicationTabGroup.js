function ApplicationTabGroup(Window) {
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	//Create instance for new Window
	var CheckWindow = require('/ui/check/CheckWindow');	

	
	//create app tabs
	//var win1 = new Window(L('home')),
	//var	win2 = new Window(L('check'))
	//var	win3 = new Window(L('parking'))
	
	var win1 = new CheckWindow('Parking Thief', true);
	var tab1 = Ti.UI.createTab({
		title: L('home'),
		icon: '/images/KS_nav_ui.png',
		window: win1
	});
	win1.containingTab = tab1;
	//Require the Parking List View for opening new window in tab2
	var ParkingListWindow = require('/ui/parkinglist/ParkTime');
	
	var win2 = new ParkingListWindow('Parking List');
	var tab2 = Ti.UI.createTab({
		title: L('parking'),
		icon: '/images/KS_nav_views.png',
		window: win2
	});
	win2.containingTab = tab2;
	
	var SettingsChangeWindow = require('/ui/settings/SettingsWindow');
	
	var win3 = new SettingsChangeWindow('Settings');
	var tab3 = Ti.UI.createTab({
		title: L('settings'),
		icon: '/images/KS_nav_views.png',
		window: win3
	});
	win3.containingTab = tab3;
	
	self.addTab(tab1);
	self.addTab(tab2);
	self.addTab(tab3);
	
	return self;
};

module.exports = ApplicationTabGroup;
