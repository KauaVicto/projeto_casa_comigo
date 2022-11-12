$(document).ready(function () {

    $('#btn-manual').on('click', function (e) {
        e.preventDefault();
        $('#manual').hide(300)
        $('#fase1').show(300)
    })

    $('#fase1 button').on('mouseover', function (e) {
        if ($(this).hasClass('nao')) {
            if ($('#fase1 #botoes').css('flex-direction') == 'row') {
                $('#fase1 #botoes').css({ 'flex-direction': 'row-reverse' })
            } else {
                $('#fase1 #botoes').css({ 'flex-direction': 'row' })
            }
        }
    })

    $('#fase1 button').on('click', function (e) {
        e.preventDefault();
        $('#fase1').hide(300)
        $('#fase2').show(300)
    })

    $('#fase2 .nao').on('mouseover', function (e) {

        let posX = Math.random() * 600;
        let posY = Math.random() * 400;
        $(this).css({
            'top': posY + 'px',
            'left': posX + 'px'
        })

    })

    $('#fase2 button').on('click', function (e) {
        e.preventDefault();
        $('#fase2').hide(300)
        $('#fase3').show(300)
    })


    $('#fase3 button').on('click', function (e) {
        e.preventDefault();
        $('#fase3').hide(300)
        $('#final').show(300)
    })

})