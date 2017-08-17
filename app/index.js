(function ($){

	$(document).ready(function (){


    /*
      Creating instance for collection and 
      calling collection view  
    */

    var supplierCollection = new SetSuppliers();
   // console.log(supplierCollection);
      supplierCollection.fetch({
        success: function(){
          var collectionView = new SetSuppliersViews({ collection: supplierCollection });
          $('#addRemoveSection').append(collectionView.render().$el);
        }


      });

		/*
		 * Tabs functionality works from below code
		*/
    
		$('#myTab a').click(function (e) {
		  e.preventDefault();
		  $(this).tab('show');
		});

		/*
		 * Below is an array of objects for table data
		*/


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


     /*
      * Fetching table template using handlebars
      * id and than rendering template using Handlebars
      * compiler and append it to tbody ID
     */
    
    /* var source = $('#complete-table-template').html();
     var addTemplate = Handlebars.compile(source);
     var html = addTemplate(rows);
     $('#addRemoveSection').html(html);*/


    /*
     * Below code is used for add and remove of table row from one table to another
    */

    /*$('.add-button a').on('click', function(){
      var $checkedRows = $("#set-markup-add input[type='checkbox']:checked").closest("tr");
      $checkedRows.detach().clone().appendTo('#set-markup-remove tbody');
      return false;
    });

    $('.remove-button a').click(function(){
      var $checkedRows = $("#set-markup-remove input[type='checkbox']:checked").closest("tr");
      $checkedRows.detach().clone().appendTo('#set-markup-add tbody');
      return false;
    });*/


      /**
       * Radio button toggle functionality
       * 
       */
       $('input[name="ritem"]').on('change',function(){
         var showOrHide = ($(this).val() == 'carat') ? true : false;
         $('#carat-markup-range').toggle(showOrHide);
         $('#price-markup-range').toggle();
      });
    

      /*
      * Below code is used for add Markups
      * for price range
      */

     $('#price-add-btn').on('click', function(){
       var pr1 = $('#pr1 input').val();
       var pr2 = $('#pr2 input').val();
       var pr3 = $('#pr3 input').val();
       var pr4 = $('#pr4 input').val();

       var priceRange = '';
        priceRange+="<tr>";
        priceRange+="<td>"+pr1+"</td>";
        priceRange+="<td>"+pr2+"</td>";
        priceRange+="<td>"+pr3+"</td>";
        priceRange+="<td>"+pr4+"</td>";
        priceRange+="<td><input type='checkbox'></td>";
        priceRange+="<td>x</td>";
        
        priceRange+="</tr>";



      var $checkedRows = $(priceRange).closest("tr");
      $checkedRows.appendTo('#added-markups tbody');
      return false;

      });


       /*
       * Below code is used for add Markups
       * for carat range
       */

      $('#carat-add-btn').on('click', function(){
        var cr1 = $('#cr1 input').val();
        var cr2 = $('#cr2 input').val();
        var cr3 = $('#cr3 input').val();
        var cr4 = $('#cr4 input').val();

        var caratRange = '';
         caratRange+="<tr>";
         caratRange+="<td>"+cr1+"</td>";
         caratRange+="<td>"+cr2+"</td>";
         caratRange+="<td>"+cr3+"</td>";
         caratRange+="<td>"+cr4+"</td>";
         caratRange+="<td><input type='checkbox'></td>";
         caratRange+="<td>x</td>";
         
         caratRange+="</tr>";



        var $checkedRows = $(caratRange).closest("tr");
        $checkedRows.appendTo('#added-markups tbody');
        return false;
      });


      /*
       * Radio Button switching popup
      */
      var caratoptionTarget;
      $('#carat-range').click(function(e){

          e.preventDefault();
          caratoptionTarget = e.target;
          $('#myModal').modal({ show: true });
      });

      $(".leave-btn").click(function(){
         $('#myModal').modal('hide');
      });

      $(".switch-state").click(function(){
          $(caratoptionTarget).prop('checked', true);
          $('#myModal').modal('hide');
          $('#carat-markup-range').show();
          $('#price-markup-range').hide();
      });
      
	});



})(jQuery);