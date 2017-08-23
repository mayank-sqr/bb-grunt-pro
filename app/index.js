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