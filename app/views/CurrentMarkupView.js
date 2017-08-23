var CurrentMarkupView = Backbone.View.extend({

  initialize: function() {

  },

  render: function() {
    var self = this;
    var reference = Handlebars.getTemplate("current-markup-template");
    self.$el.html(reference);
    return this;
  }


});