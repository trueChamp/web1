window.addEventListener('DOMContentLoaded', function() {

    var btn = document.querySelector('.header__search-btn'); 
    var blockHidden = document.querySelector('.header__open-search'); 
    var first = document.querySelector('.header__search-btn');  
    

    function showBlock() {
        
        blockHidden.classList.add('oa');
        first.classList.add('tran')
        
    }
    btn.addEventListener('click', showBlock);

    var close = document.querySelector('.header__search-close');
    var bh = document.querySelector('.header__open-search');
    var tran = document.querySelector('.header__search-btn');
    

    function closeBlock() {
        
        bh.classList.remove('oa');
        tran.classList.remove('tran')
        
        
    }
    close.addEventListener('click', closeBlock);
   
    var cl = document.querySelector('.header__search-close');
    var trans = document.querySelector('.header__search-btn');
    

    function clBlock() {
        
        
        trans.classList.add('trans')
        
    }
    cl.addEventListener('click', clBlock);

    var clear = document.querySelector('.header__search-btn');
    var transs = document.querySelector('.header__search-btn');
    

    function clrBlock() {
        
        
        transs.classList.remove('trans')
        
    }
    clear.addEventListener('click', clrBlock);

    var btn768 = document.querySelector('.header__search-btn-768-320');
    var openPhoneS = document.querySelector('.header__search-mobile-768');
    var closePhoneS = document.querySelector('.header__search-mobile-768');

    function openBlock() {
        
        
        openPhoneS.classList.add('active__search')
        closePhoneS.classList.remove('active__search2')
    }
    btn768.addEventListener('click', openBlock);

    var btn7682 = document.querySelector('.header__search-close2');
    var openPhoneS2 = document.querySelector('.header__search-mobile-768'); 
    

    function openBlock2() {
        
        
        openPhoneS2.classList.add('active__search2')
        
    }
    btn7682.addEventListener('click', openBlock2);

})

window.addEventListener('focusin', event => console.log(new Date, event.target));