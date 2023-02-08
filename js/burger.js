



    let menu = document.querySelector('#menu')
    let first = document.querySelector('.burger-line');
    let body = document.querySelector('#body');

    let btnLink1 = document.querySelector('.l1');
    let btnLink2 = document.querySelector('.l2');
    let btnLink3 = document.querySelector('.l3');
    let btnLink4 = document.querySelector('.l4');
    let btnLink5 = document.querySelector('.l5');
    let btnLink6 = document.querySelector('.l6');
    let btnFirst = document.querySelector('.burger');
  
  btnFirst.onclick = function() {
    
    first.classList.toggle('burger-line--active');
    menu.classList.toggle('active-menu')
    body.classList.toggle('body')
  };

  btnLink1.onclick = function() {
    
    first.classList.toggle('burger-line--active');
    menu.classList.toggle('active-menu')
    body.classList.toggle('body')
  };

  btnLink2.onclick = function() {
    
    first.classList.toggle('burger-line--active');
    menu.classList.toggle('active-menu')
    body.classList.toggle('body')
  };

  btnLink3.onclick = function() {
    
    first.classList.toggle('burger-line--active');
    menu.classList.toggle('active-menu')
    body.classList.toggle('body')
  };

  btnLink4.onclick = function() {
    
    first.classList.toggle('burger-line--active');
    menu.classList.toggle('active-menu')
    body.classList.toggle('body')
  };

  btnLink5.onclick = function() {
    
    first.classList.toggle('burger-line--active');
    menu.classList.toggle('active-menu')
    body.classList.toggle('body')
  };

  btnLink6.onclick = function() {
    
    first.classList.toggle('burger-line--active');
    menu.classList.toggle('active-menu')
    body.classList.toggle('body')
  };
  
  
  
    /*
    var btn = document.querySelector('burger');
    var block = document.querySelector('#menu');
    var block2 = document.querySelector('.burger-line');
    
  
    function hideBlock() {
  
      block.classList.remove('active-menu');
      block2.classList.remove('burger-line--active');
      
  } 
  
  */
  
  
    btn.addEventListener('click', hideBlock);
  
  
