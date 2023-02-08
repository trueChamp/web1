ymaps.ready(init);

function init() {

    var myMap = new ymaps.Map("map", {

        center: [55.76013762, 37.61492175],

        zoom: 14,

        controls: ['geolocationControl', 'zoomControl'],

    });


    
    

    var myPlacemark = new ymaps.Placemark([55.76031368349816, 37.614819070744645], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/maker.svg',
        iconImageSize: [15, 15],
        iconImageOffset: [-9, 0]
    });

    myMap.geoObjects.add(myPlacemark);
}