$(document).ready(function () {
    if (!$) {
        console.critical('jQuery is required')
        return;
    }

    var fns = {
        initPage: function () {
            fns.bindButtonClick('#classicButton', '');
            fns.bindButtonClick('#quoteButton', '');
            fns.bindButtonClick('#abilityButton', '');
        },
        bindButtonClick: function (target, ref) {
            $(target).on('click', function () {

            });
        }
    }

    fns.initPage();

});