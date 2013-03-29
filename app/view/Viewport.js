Ext.define('Formation.view.Viewport', {
    renderTo: Ext.getBody(),
    extend: 'Ext.container.Viewport',
    requires:[
    'Ext.tab.Panel',
    'Ext.layout.container.Border'
    ],

    layout: {
	type: 'ux.center'
    },

    items: [{
	xtype: 'panel',
	title: 'BIENVENUE PAR ICI COPAIN',
	width: 800,
	items:[{
	    xtype: 'tabpanel',
	    title: 'INSCRIS TOI'
	}]
    }]
});