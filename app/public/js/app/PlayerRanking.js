define([
	"dojo/dom",
	"dojo/_base/declare",
	"dojo/dom-construct",
	"dijit/_WidgetBase"
], function(dom, declare, domConstruct, _WidgetBase) {
	var PlayerRanking = declare("app.PlayerRanking", [_WidgetBase], {
		constructor: function(config, node) {
			this.inherited(config, node);
			this.player = config.player;
		},
		postCreate: function(){
			var div = domConstruct.create("div", {innerHTML: this.player.name}, this.domNode);
		}
	});
	return PlayerRanking;
});
