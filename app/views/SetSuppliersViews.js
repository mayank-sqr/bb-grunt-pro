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