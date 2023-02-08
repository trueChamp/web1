$(function() {
    $("#accordion").accordion();

    $(document).ready(function() {


      $("#accordion").show().accordion({
          autoHeight: false
      });
  
      $("#accordion div").css({ 'height': 'auto' });
  });      
});
