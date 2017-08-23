var SetSupplierView = Backbone.View.extend({

  events: {
    "click .add-button a": "addRow",
    "click .remove-button a": "removeRow"
  },

  initialize: function(options) {
    //this.users = options.model.toJSON();
    //console.log('model view =>', users)

		/*
     * Below is an array of objects for table data
     */
    
    this.rows = [{
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


  },


  addRow: function(e) {
    /*
     * Below code is used to add a table row from one table to another
     */
    var $checkedRows = $("#set-markup-add input[type='checkbox']:checked").closest("tr");
    $checkedRows.detach().clone().appendTo('#set-markup-remove tbody');
    return false;

  },

  removeRow: function(e) {
    /*
     * Below code is used to remove a table row from one table to another
     */
    var $checkedRows = $("#set-markup-remove input[type='checkbox']:checked").closest("tr");
    $checkedRows.detach().clone().appendTo('#set-markup-add tbody');
    return false;

  },


  render: function() {
    /**
     * Fetching table template using handlebars
     * id and than rendering template using Handlebars
     * compiler and append it to tbody ID
     */
    var self = this;
    var source = Handlebars.getTemplate("supplier-template");
    var html = source(this.rows);
    self.$el.html(html);

    return this;


  }

});