document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open');
}

document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open');
    }
})

$('#ajax-form-success').hide();

let loader = $('.loader');
$('#submit').click(function () {
    let choice = $('#choice-input');
    let name = $('#name-input');
    let phone = $('#tel-input');
    let hasError = false;

    choice.css('border-color', '#821328');
    name.css('border-color', '#821328');
    phone.css('border-color', '#821328');

    $('.error-input').hide();
    if (!choice.val()) {
        choice.next().show();
        hasError = true;
        choice.css('border-color', 'red');
    }
    if (!name.val()) {
        name.next().show();
        hasError = true;
        name.css('border-color', 'red');
    }
    if (!phone.val()) {
        phone.next().show();
        hasError = true;
        phone.css('border-color', 'red');
    }

    if (!hasError) {
        loader.css('display', 'flex');       
        $.ajax({
            method: "POST",
            url: "https://testologia.site/checkout",
            data: {rights: rights.is(':checked'), name: name.val(), phone: phone.val()},
            success: function (data) {
                loader.hide();
                let formInput = $('#popup-form-input');
                if (name.val() === 'itlogia') {
                    formInput.hide();
                    $('#ajax-form-popup').show();
                } else {
                    alert('Возникла непредвиденная ошибка, позвоните нам и получите консультацию!');
                }
                formInput.trigger("reset");
            }
        })         
    }
});

$('.choice-btn').click(event => {
    $('#choice-input').val($(event.target).parents('.choice-item').find('.choice-item-title').text());
});