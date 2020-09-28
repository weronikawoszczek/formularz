app.common = {
    mainInit: () => {
        let text = 'ES6 is working';

        $('.quest-initial #akt').click(function () {
            $('.if-akt').slideDown();
            $('.documents').slideUp();
            $('.numerczynnosci').slideUp();
        });
        $('.quest-initial #poswiadczenie').click(function () {
            $('.documents').slideDown();
            $('.numerczynnosci').slideDown();
            $('.if-akt').slideUp();
            $('.if-przedmiot-caller').slideUp();
            $('.other-object').slideUp();
            $('.if-6').slideUp();
            $('.if-withprice').slideUp();
            $('.account').slideUp();
            $('.nextDiv').slideUp();
            $('.if-withvalue').slideUp();
            $('.if-withcredit').slideUp();
            $('.if-ukur').slideUp();
            $('.ukur').slideUp();
            $('.if-tax').slideUp();
            $('.if-othertax').slideUp();
            $('.if-charge').slideUp();
            $('.other-doc').slideUp();
            $('.numeraktu').slideUp();
            $('.if-sprzedazprzed').slideUp();
            $('.if-sprzedazwar').slideUp();
            $('.if-przeniesienie').slideUp();

        });
        $('.quest-initial #inne').click(function () {
            $('.documents').slideDown();
            $('.numerczynnosci').slideDown();
            $('.if-akt').slideUp();
            $('.if-przedmiot-caller').slideUp();
            $('.other-object').slideUp();
            $('.if-6').slideUp();
            $('.if-withprice').slideUp();
            $('.account').slideUp();
            $('.nextDiv').slideUp();
            $('.if-withvalue').slideUp();
            $('.if-withcredit').slideUp();
            $('.if-ukur').slideUp();
            $('.ukur').slideUp();
            $('.if-tax').slideUp();
            $('.if-othertax').slideUp();
            $('.if-charge').slideUp();
            $('.other-doc').slideUp();
            $('.numeraktu').slideUp();
            $('.if-sprzedazprzed').slideUp();
            $('.if-sprzedazwar').slideUp();
            $('.if-przeniesienie').slideUp();
        });


        $("#select-type").change(function () {
            var iscaller = $(this).val();

            if (iscaller == "yes") {
                $('.other').slideUp();
                $('.if-przedmiot-caller').slideDown();
            }
            else if (iscaller == "other") {
                $('.if-przedmiot-caller').slideUp();
                $('.other').slideDown().css('display','flex');
            }
            else {
                $('.if-przedmiot-caller').slideUp();
                $('.other').slideUp();
            }

            var selected = $(this).find(':selected');
            var price = selected.data('price');
            if (price == "yes") {
                $('.if-withvalue').slideUp();
                $('.if-withprice').slideDown().css('display', 'flex');
            }
            else if (price == "value") {
                $('.if-withprice, .nextDiv').slideUp();
                $('.if-withvalue').slideDown();
            }
            else {
                $('.if-withprice').slideUp();
                $('.if-withprice, .nextDiv').slideUp();
                $('.if-withvalue').slideUp();
            }

            var credit = selected.data('credit');
            if (credit == "yes") {
                $('.if-withcredit').slideDown().css('display', 'flex');
            }
            else {
                $('.if-withcredit').slideUp();
            }

            var duty = selected.data('duty');
            if (duty == "yes") {
                $('.if-6').slideDown().css('display', 'flex');
            }
            else {
                $('.if-6').slideUp();
            }

            var ukur = selected.data('ukur');
            if (ukur == "yes") {
                $('.if-ukur').slideDown().css('display', 'flex');
            }
            else {
                $('.if-ukur').slideUp();
                $('.ukur').slideUp();
            }

            var przeniesienieukur = selected.data('przeniesienie');
            if (przeniesienieukur == "yes" && ukur=="yes" && $('#ukur').is(":checked")) {
                $('.if-przeniesienieukur').slideDown();
            }
            else {
                $('.if-przeniesienieukur').slideUp();
            }

            var tax = selected.data('tax');
            if (tax == "yes") {
                $('.if-tax').slideDown().css('display', 'flex');
            }
            else {
                $('.if-tax').slideUp();
            }

            var othertax = selected.data('othertax');
            if (othertax == "yes") {
                $('.if-othertax').slideDown().css('display', 'flex');
            }
            else {
                $('.if-othertax').slideUp();
            }

            var charge = selected.data('charge');
            if (charge == "yes") {
                $('.if-charge').slideDown().css('display', 'flex');
            }
            else {
                $('.if-charge').slideUp();
            }

            // --------------------------------------------------------------------------

            var przeniesienie = selected.data('przeniesienie');
            if (przeniesienie == "yes") {
                $('.if-przeniesienie').slideDown().css('display', 'flex');
            }
            else {
                $('.if-przeniesienie').slideUp();
            }

            var sprzedazwar = selected.data('sprzedazwar');
            if (sprzedazwar == "yes") {
                $('.if-sprzedazwar').slideDown().css('display', 'flex');
            }
            else {
                $('.if-sprzedazwar').slideUp();
            }

            var sprzedazprzed = selected.data('sprzedazprzed');
            if (sprzedazprzed == "yes") {
                $('.if-sprzedazprzed').slideDown().css('display', 'flex');
            }
            else {
                $('.if-sprzedazprzed').slideUp();
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

            var selected = $("#select-type").find(':selected');
            var ukur = selected.data('ukur');
            var ifprzeniesienie = selected.data('przeniesienie');

            if(this.checked && ukur == "yes") {
                $('.ukur').slideDown().css('display', 'flex');
            }
            else {
                $('.ukur').slideUp();
            }

            if(this.checked && ukur == "yes" && ifprzeniesienie == "yes") {
                $('.if-przeniesienieukur').slideDown().css('display', 'flex');
            }
            else {
                $('.if-przeniesienieukur').slideUp();
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

        $('.przelew').click(function () {
            $(this).parent().siblings('.account').slideDown().css('display', 'flex');
        });

        $('.gotowka').click(function () {
            $(this).parent().siblings('.account').slideUp();
        });


        // $('.inny').click(function () {
        //     var dateDiv = $(this).data('date');
        //     $('#' + dateDiv).slideDown().css('display', 'flex');
        // });
        // $('.tensam, .przedaktem').click(function () {
        //     var dateDiv = $(this).data('date');
        //     $('#' + dateDiv).slideUp();
        // });

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
