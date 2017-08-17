var SetSupplierView = Backbone.View.extend({

	events: {
			"click .add-button a": "addRow",
			"click .remove-button a": "removeRow"
	},

	initialize: function(options){
		//this.users = options.model.toJSON();
		//console.log('model view =>', users)
		

	},


	addRow: function(e){
		var $checkedRows = $("#set-markup-add input[type='checkbox']:checked").closest("tr");
		$checkedRows.detach().clone().appendTo('#set-markup-remove tbody');
		return false;
		
	},

	removeRow: function(e){
		var $checkedRows = $("#set-markup-remove input[type='checkbox']:checked").closest("tr");
      $checkedRows.detach().clone().appendTo('#set-markup-add tbody');
      return false;
		
	},


	render: function(){
		var self = this;
		var source = $('#complete-table-template').html();
	  var addTemplate = Handlebars.compile(source);
	  var rows = [{
	              id: 1,
	              company: "OPT",
	              diamonds: "D1"
	          }, {
	              id: 2,
	              company: "OPTStage",
	              diamonds: "D2"
	          }, {
	              id: 3,
	              company: "OPTDev",
	              diamonds: "D3"
	          }, {
	              id: 4,
	              company: "OPTqa",
	              diamonds: "D4"
	          }, {
	              id: 5,
	              company: "OPTMaster",
	              diamonds: "D5"
	          }, {
	              id: 6,
	              company: "OPTGold",
	              diamonds: "D6"
	          }];
	  var html = addTemplate(rows);
	  //console.log(el);
	 //$('#addRemoveSection').html(html);
	 self.$el.html(html);
	 // this.$el.setElement(html);

	  return this;


	}

});