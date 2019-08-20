define([
	"dojo/dom",
	"dojo/_base/lang",
	"dojo/_base/declare",
	"dojo/dom-construct",
	"dojo/on",
	"dijit/_WidgetBase",
    "dijit/form/RadioButton",
    "dijit/form/Button"
], function(dom, declare, domConstruct, on, _WidgetBase, RadioButton, Button){
	var GamesWon = declare("app.GamesWon", [_WidgetBase], {
		radios: [],
		postCreate: function(){
			addDisabled("n");
			enableLast();
			addDisabled("n1");
		},
		enableLast: function(){
			for(var r in this.radios[this.radios.length - 1]) {
				this.radios[this.radios.length - 1][r].set("disabled", "");
			}
		},
		addDisabled: function(name) {
			var div = domConstruct.create("div", {}, this.domNode);
			
			this.radios.push([
				new RadioButton({
					name: name,
					disabled: "disabled"
				}, div),
				new RadioButton({
					name: name,
					disabled: "disabled"
				}, div)
			]);
			
			var currentIndex = this.radios.length - 1;
			for(var r in this.radios[currentIndex]) {
				on(this.radios[currentIndex][r], "click", lang.hitch(this, function(){
					if (currentIndex == this.radios.length - 2){
						enableLast();
						addDisabled(name + "1");
					}
				}));
			}
		}
	});
	return GamesWon;
});