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

    var pcRangeRow = Handlebars.getTemplate("pc-range-table-row");
    var pcRangeRowOutput = pcRangeRow(pcRangeInputValues)

    var $checkedRows = this.$el.find('#added-markups tbody').append(pcRangeRowOutput);
    //$checkedRows.appendTo('tbody');

    /**
     * After adding a Markups to table blank input fields.
     */
    $('.markup-table tr input').val(' ');

    return false;

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
    var pcRangeRow = Handlebars.getTemplate("pc-range-table-row");
    var pcRangeRowOutput = pcRangeRow(pcRangeInputValues)

    var $checkedRows = this.$el.find('#added-markups tbody').append(pcRangeRowOutput);
    // $checkedRows.appendTo('#added-markups tbody');

    /**
     *  After adding a Markups to table blank input fields.
     */
    $('.markup-table input').val(' ');

    return false;
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