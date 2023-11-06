$(function () {
    'use strict';

    $('.form-password-toggle .input-group-text').on('click', function (e) {
        e.preventDefault()

        const $this = $(this),
            inputGroupText = $this.closest('.form-password-toggle'),
            formPasswordToggleIcon = $this,
            formPasswordToggleInput = inputGroupText.find('input')

        const inputIsText = formPasswordToggleInput.attr('type') === 'text'

        const inputType = inputIsText ? 'password' : 'text'
        const toogleIcon = inputIsText ? feather.icons['eye'] :  feather.icons['eye-off']

        formPasswordToggleInput.attr('type', inputType)
        if (feather) {
            formPasswordToggleIcon.find('svg').replaceWith(toogleIcon.toSvg({ class: 'font-small-4' }))
        }
    })
});
