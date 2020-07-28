app.common = {
    mainInit: () => {
        let text = 'ES6 is working';

        $('.quest-initial #akt').click(function () {
            $('.if-1').slideDown();
            $('.documents').slideUp();
        });
        $('.quest-initial #poswiadczenie').click(function () {
            $('.documents').slideDown();
            $('.if-1').slideUp();
            $('.if-2').slideUp();
            $('.other-object').slideUp();
            $('.if-6').slideUp();
            $('.if-3').slideUp();
            $('.account').slideUp();
            $('.nextDiv').slideUp();
            $('.if-4').slideUp();
            $('.if-5').slideUp();
            $('.ukur').slideUp();
            $('.if-7').slideUp();
            $('.if-8').slideUp();
            $('.if-9').slideUp();
            $('.other-doc').slideUp();
            $('.comments').slideUp();
        });
        $('.quest-initial #inne').click(function () {
            $('.if-1').slideUp();
        });


        $("#select-type").change(function () {
            var iscaller = $(this).val();

            if (iscaller == "yes") {
                $('.other').slideUp();
                $('.if-2').slideDown();
            }
            else if (iscaller == "other") {
                $('.if-2').slideUp();
                $('.other').slideDown().css('display','flex');
            }
            else {
                $('.if-2').slideUp();
                $('.other').slideUp();
            }

            var selected = $(this).find(':selected');
            var price = selected.data('price');
            if (price == "yes") {
                $('.if-4').slideUp();
                $('.if-3').slideDown().css('display', 'flex');
            }
            else if (price == "value") {
                $('.if-3, .nextDiv').slideUp();
                $('.if-4').slideDown();
            }
            else {
                $('.if-3').slideUp();
                $('.if-3, .nextDiv').slideUp();
                $('.if-4').slideUp();
            }

            var credit = selected.data('credit');
            if (credit == "yes") {
                $('.if-5').slideDown().css('display', 'flex');
            }
            else {
                $('.if-5').slideUp();
            }

            var duty = selected.data('duty');
            if (duty == "yes") {
                $('.if-6').slideDown().css('display', 'flex');
            }
            else {
                $('.if-6').slideUp();
            }

            var tax = selected.data('tax');
            if (tax == "yes") {
                $('.if-7').slideDown().css('display', 'flex');
            }
            else {
                $('.if-7').slideUp();
            }

            var othertax = selected.data('othertax');
            if (othertax == "yes") {
                $('.if-8').slideDown().css('display', 'flex');
            }
            else {
                $('.if-8').slideUp();
            }

            var charge = selected.data('charge');
            if (charge == "yes") {
                $('.if-9').slideDown().css('display', 'flex');
            }
            else {
                $('.if-9').slideUp();
            }

            var sale = selected.data('sale');
            var liNoSale = $('.no-sale').parent('li');
            var liSale = $('.sale').parent('li');

            if (sale == "yes") {
                liSale.css('display', 'block');
                liNoSale.css('display', 'none');

                $('.przedaktem').slideDown();
                $('.smaller-label').addClass('active');
            }
            else {
                liSale.css('display', 'none');
                liNoSale.css('display', 'block');

                $('.przedaktem').slideUp();
                $('.smaller-label').removeClass('active');
            }
        });

        $("#selectobject").change(function () {
            var isotherobject = $(this).val();
            if (isotherobject == "otherobject") {
                $('.other-object').slideDown().css('display','flex');
            }
            else {
                $('.other-object').slideUp();
            }

            var selectedOption = $(this).find(':selected');
            var lokal = selectedOption.data('first');
            if (lokal == "yes") {
                $('.type-1, .title-el').slideDown().css('display', 'flex');
            }
            else {
                $('.type-1, .title-el').slideUp();
            }
        });

        $("#ukur").change(function () {
            if(this.checked) {
                $('.ukur').slideDown().css('display', 'flex');
            }
            else {
                $('.ukur').slideUp();
            }
        });

        $("#cenanieznana").change(function () {
            if(this.checked) {
                $("#cena").prop('disabled', true).val("");
                $("#cena.changeinput").addClass('grayed');
                $(".cena.changelabel").addClass('grayed');
            }
            else {
                $("#cena").prop('disabled', false);
                $("#cena.changeinput").removeClass('grayed');
                $(".cena.changelabel").removeClass('grayed');
            }
        });

        $("#wartoscnieznana").change(function () {
            if(this.checked) {
                $("#wartosc").prop('disabled', true).val("");
                $("#wartosc.changeinput").addClass('grayed');
                $(".wartosc.changelabel").addClass('grayed');
            }
            else {
                $("#wartosc").prop('disabled', false);
                $("#wartosc.changeinput").removeClass('grayed');
                $(".wartosc.changelabel").removeClass('grayed');
            }
        });

        $('.add-next').click(function () {
            $(this).slideUp();
            var nextDiv = $(this).data('next');
            $('#' + nextDiv).slideDown().css('display', 'flex');
        });

        $('.add-next-final').click(function () {
            $(this).slideUp();
            $('.next-final').slideDown().css('display', 'flex');
        });

        $('#przelew').click(function () {
            $('.account').slideDown().css('display', 'flex');
        });

        $('#gotowka').click(function () {
            $('.account').slideUp();
        });


        $('.inny').click(function () {
            var dateDiv = $(this).data('date');
            $('#' + dateDiv).slideDown().css('display', 'flex');
        });
        $('.tensam').click(function () {
            var dateDiv = $(this).data('date');
            $('#' + dateDiv).slideUp();
        });

        $("#sposobnieznany").change(function () {
            if(this.checked) {
                $("#sposob").prop('disabled', true).val("");
                $("#sposob.changeinput").addClass('grayed');
                $(".sposob.changelabel").addClass('grayed');
            }
            else {
                $("#wartosc").prop('disabled', false);
                $("#sposob.changeinput").removeClass('grayed');
                $(".sposob.changelabel").removeClass('grayed');
            }
        });

        $(".input-number").change(function () {

            var inputValue = $(this).val();
            var inputValueIs = $(this).siblings('.input-number').val();

            console.log('inputValue = ' + inputValue);
            console.log('inputValueIs = ' + inputValueIs);

            if ((inputValue == "0" || inputValue == "") && (inputValueIs == "0" || inputValueIs == "")) {
                $(this).parent().parent().find('label').addClass('grayed');
            } else {
                $(this).parent().parent().find('label').removeClass('grayed');
            }
        });
    }
}

$(function () {
    $(document).ready(() => {
        app.common.mainInit();
    })
});
