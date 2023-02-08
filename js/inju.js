var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);

new JustValidate('#form', {
    rules: {
        name: {
            required: true,
            minLength: 2,


            strength: {
                custom: '^[А-Я][а-я]{2,16}$'
            }

        },
        email: {
            required: true,
            email: true
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        },
    },

    messages: {
        name: {
            required: 'Как вас зовут?',
            minLength: 'Введите 3 и более символов',
            strength: 'Недопустимый формат'
        },
        tel: {
            required: 'Укажите ваш телефон',
            function: 'Здесь должно быть 10 цифр'
        },
    },




});