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