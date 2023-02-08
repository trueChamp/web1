window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.catalog__acord__a').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {

            const path = event.currentTarget.dataset.path





            document.querySelectorAll('.catalog__block__con').forEach(function(tabsDip) {
                tabsDip.classList.remove('catalog__block__active')
            })
            document.querySelector(`[data-target2="${path}"]`).classList.add('catalog__block__active')
        })
    })

    

    const container = document.querySelector('.catalog__accord__list')

    container.addEventListener('click', function(e) {
        const items = document.querySelectorAll('.catalog__acord__a')
        const target = e.target
        Array.from(items).forEach(item => {
            item.classList.remove('catalog__acord__active')
        })
        target.classList.add('catalog__acord__active')
    })


    
})