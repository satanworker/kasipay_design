document.addEventListener('DOMContentLoaded', function(event) {
    var ks_timeout;
    document.querySelector('.ks_button').addEventListener('click', function(event) {
        var popup = document.getElementById('pay_popup');
        popup.classList.add('active', 'magictime', 'puffIn')
    });
    var elem = document.querySelector('.js-switch');
    var init = new Switchery(elem, { size: 'small' });
});