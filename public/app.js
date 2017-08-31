/* Compiled file! lds-admin-markup - v6.0.0 - 2017-08-29 */var CurrentMarkup = Backbone.Model.extend({

});
var SetMarkup = Backbone.Model.extend({
	
});
var SetSupplier = Backbone.Model.extend({

  /*url: function(){
  	return "https://jsonplaceholder.typicode.com/posts"
  }*/


});
var CurrentMarkups = Backbone.Collection.extend({

  model: CurrentMarkup,

});
var SetMarkups = Backbone.Collection.extend({

  moedl: SetMarkup

});
var SetSuppliers = Backbone.Collection.extend({

  model: SetSupplier,

  url: "https://jsonplaceholder.typicode.com/posts"

});
var CurrentMarkupView = Backbone.View.extend({

  initialize: function() {

  },

  /**
   * [events description]
   * @type {Object}
   */
  events: {
    "click .delete": "deleteMarkup"
  },

  /**
   * [deleteMarkup description]
   * @param  {[type]} e [description]
   * @return {[type]}   [description]
   */
  deleteMarkup: function(e) {

    var deleteMarkup = $(e.currentTarget);

    $('#deleteMarkup').modal({
      show: true
    });

    $(".leave-btn").click(function() {
      $('#deleteMarkup').modal('hide');
    });

    $(".delete-markup").click(function() {
      var $target = $('.checkme input[type=checkbox]:checked');
      if ($target.length) {
        deleteMarkup.closest('tr').remove();
        $('#deleteMarkup').modal('hide');
      } else {
        console.log('Please select checkbox first to remove row');
      }
    });
  },

  render: function() {
    var self = this;
    var reference = Handlebars.getTemplate("current-markup-template");
    self.$el.html(reference);
    return this;
  }


});

var SetMarkupView = Backbone.View.extend({

  initialize: function() {
    //console.log(this.$el);
  },
  /**
   * [events description]
   * @type {Object}
   */
  events: {
    "click #price-add-btn": "markupbyPrice",
    "click #carat-add-btn": "markupbyCarat",
    "click #carat-range": "confirmationPOPUP",
    "click .delete": "deleteMarkup"
  },


  markupbyPrice: function() {
    /*
     *
     * Below code is used for add Markups
     * for price range
     * @return {[type]} [description]
     */
    var pcRangeInputValues = {
      $pcFirstInput: this.$('.finput input').val(),
      $pcSecondInput: this.$('.sinput input').val(),
      $pcThirdInput: this.$('.tinput input').val(),
      $pcFourthInput: this.$('.foinput input').val()
    }

    /**
     * Storing input values in form of table
     */
    if (pcRangeInputValues.$pcFirstInput != ' ' && pcRangeInputValues.$pcSecondInput != ' ' && pcRangeInputValues.$pcThirdInput != ' ' && pcRangeInputValues.$pcFourthInput != ' ') {
      var pcRangeRow = Handlebars.getTemplate("pc-range-table-row");
      var pcRangeRowOutput = pcRangeRow(pcRangeInputValues)

      var $checkedRows = this.$el.find('#added-markups tbody').append(pcRangeRowOutput);
      //$checkedRows.appendTo('tbody');

      /**
       * After adding a Markups to table blank input fields.
       */
      $('.markup-table input').val(' ');

      return false;
    } else {
      console.log('Fill all Input Fields');
    }
  },

  markupbyCarat: function() {
    /**
     * Below code is used for add Markups
     * for carat range
     * @type {[type]}
     */
    var pcRangeInputValues = {
      $pcFirstInput: this.$('.finputCarat input').val(),
      $pcSecondInput: this.$('.sinputCarat input').val(),
      $pcThirdInput: this.$('.tinputCarat input').val(),
      $pcFourthInput: this.$('.foinputCarat input').val()
    }

    /**
     * Storing input values in form of table
     */
    if (pcRangeInputValues.$pcFirstInput != ' ' && pcRangeInputValues.$pcSecondInput != ' ' && pcRangeInputValues.$pcThirdInput != ' ' && pcRangeInputValues.$pcFourthInput != ' ') {
      var pcRangeRow = Handlebars.getTemplate("pc-range-table-row");
      var pcRangeRowOutput = pcRangeRow(pcRangeInputValues)

      var $checkedRows = this.$el.find('#added-markups tbody').append(pcRangeRowOutput);
      // $checkedRows.appendTo('#added-markups tbody');

      /**
       *  After adding a Markups to table blank input fields.
       */
      $('.markup-table input').val(' ');

      return false;
    } else {
      console.log('Fill all Input Fields');
    }
  },

  confirmationPOPUP: function(e) {
    /*
     * Radio Button switching popup
     */

    var caratoptionTarget;

    e.preventDefault();
    caratoptionTarget = e.target;
    $('#myModal').modal({
      show: true
    });

    $(".leave-btn").click(function() {
      $('#myModal').modal('hide');
    });

    $(".switch-state").click(function() {
      $(caratoptionTarget).prop('checked', true);
      $('#myModal').modal('hide');
      $('#carat-markup-range').show();
      $('.markup-table tr input').val(' ');

      $('#price-markup-range').hide();

      /**
       * After adding a Markups to table blank input fields.
       */
      $('.markup-table input').val(' ');
    });

  },

  deleteMarkup: function(e) {

    var deleteMarkup = $(e.currentTarget);

    $('#deleteMarkup').modal({
      show: true
    });

    $(".leave-btn").click(function() {
      $('#deleteMarkup').modal('hide');
    });

    $(".delete-markup").click(function() {
      var $target = $('.checkme input[type=checkbox]:checked');
      if ($target.length) {
        deleteMarkup.closest('tr').remove();
        $('#deleteMarkup').modal('hide');
      } else {
        console.log('Please select checkbox first to remove row');
      }
    });
  },

  render: function() {
    var self = this;
    var reference = Handlebars.getTemplate("markup-template");
    self.$el.html(reference);
    return this;
  }


});

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
var SetSuppliersViews = Backbone.View.extend({

  initialize: function() {
    this.modelView = new SetSupplierView({
      el: ''
    });
  },


  render: function() {
    var self = this;
    this.collection.each(function(SetSupplier) {
      //console.log(SetSupplier);
      // creating instance for model view
      // 
      self.modelView.model = SetSupplier;

      self.$el.append(self.modelView.render().$el);
    });

    return this;
  }

});
(function($) {

  $(document).ready(function() {


    /*
      Creating instance for collection and 
      calling collection view for Suppliers
    */

    var supplierCollection = new SetSuppliers();
    // console.log(supplierCollection);
    supplierCollection.fetch({
      success: function() {
        var collectionView = new SetSuppliersViews({
          collection: supplierCollection
        });
        $('#addRemoveSection').append(collectionView.render().$el);
      }

    });

    /*
      Creating instance for Markup Model and 
      calling Model view for Markup
    */

    var markupModel = new SetMarkup();
    var markupView = new SetMarkupView({
      model: markupModel,
      el: '.markup-table'
    });
    $('#step-two-markups').append(markupView.render().$el);


    /*
      Creating instance for Current Markup Model and 
      calling Model view for Markup
    */

    var currentMarkupModel = new CurrentMarkup();
    var currentMarkupView = new CurrentMarkupView({
      model: currentMarkupModel,
      el: '.current-markup-table'
    });
    $('#current-markups').append(currentMarkupView.render().$el);


    /*
     * Tabs functionality works from below code
     */

    $('#myTab a').click(function(e) {
      e.preventDefault();
      $(this).tab('show');
    });


    /**
     * Radio button toggle functionality
     *
     */
    $('input[name="ritem"]').on('change', function() {
      var showOrHide = ($(this).val() == 'carat') ? true : false;
      $('#carat-markup-range').toggle(showOrHide);
      $('#price-markup-range').toggle();
    });

    /**
     * Tootip for Markup Forms
     */
    $('.question-mark').tooltip();


  });

})(jQuery);