$( function() {
    var dateFormat = "dd/mm/yy",
     from = $( "#from" )
         .datepicker({
         defaultDate: "+1d",
         changeMonth: true,
         changeYear: true,
         numberOfMonths: 1,
         minDate: "+1D", maxDate: "+1Y+1D"
         })
         .on( "change", function() {
         to.datepicker();
         }),
     to = $( "#to" ).datepicker({
         changeMonth: true,
         changeYear: true,
         defaultDate: "+1w",
         numberOfMonths: 1,
         minDate: "+3D", maxDate: "+1Y+3D"
     })
     .on( "change", function() {
         from.datepicker();
     });
 
     function getDate( element ) {
         var date;
         try {
             date = $.datepicker.parseDate( dateFormat, element.value );
         } catch( error ) {
             date = null;
         }
 
     return date;
     }
 } );