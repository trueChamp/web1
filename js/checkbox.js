$('#form1').eq(0).on("change", function(e){ 
    $('input[name^=check]').each(function()
    { 
      if(e.target != this)
        this.checked = false; 
    });
})

$('form').eq(0).on('submit', function() {
     return $('input[name^=check]:checked:enabled').length == 1;
});
