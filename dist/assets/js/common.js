"use strict";app.common={mainInit:function(){$(".quest-initial #akt").click(function(){$(".if-akt").slideDown(),$(".documents").slideUp(),$(".numerczynnosci").slideUp()}),$(".quest-initial #poswiadczenie").click(function(){$(".documents").slideDown(),$(".numerczynnosci").slideDown(),$(".if-akt").slideUp(),$(".if-przedmiot-caller").slideUp(),$(".other-object").slideUp(),$(".if-6").slideUp(),$(".if-withprice").slideUp(),$(".account").slideUp(),$(".nextDiv").slideUp(),$(".if-withvalue").slideUp(),$(".if-withcredit").slideUp(),$(".if-ukur").slideUp(),$(".ukur").slideUp(),$(".if-tax").slideUp(),$(".if-othertax").slideUp(),$(".if-charge").slideUp(),$(".other-doc").slideUp(),$(".numeraktu").slideUp(),$(".if-cudzoziemiec").slideUp(),$(".if-sprzedazprzed").slideUp(),$(".if-sprzedazwar").slideUp(),$(".if-przeniesienie").slideUp(),$(".if-dozywocie").slideUp(),$(".if-darowizna").slideUp(),$(".if-dzialzniesienie").slideUp(),$(".if-podzial").slideUp(),$(".if-deweloperska").slideUp(),$(".if-ustanowienie").slideUp(),$(".if-apd").slideUp()}),$(".quest-initial #inne").click(function(){$(".documents").slideDown(),$(".numerczynnosci").slideDown(),$(".if-akt").slideUp(),$(".if-przedmiot-caller").slideUp(),$(".other-object").slideUp(),$(".if-6").slideUp(),$(".if-withprice").slideUp(),$(".account").slideUp(),$(".nextDiv").slideUp(),$(".if-withvalue").slideUp(),$(".if-withcredit").slideUp(),$(".if-ukur").slideUp(),$(".ukur").slideUp(),$(".if-tax").slideUp(),$(".if-othertax").slideUp(),$(".if-charge").slideUp(),$(".other-doc").slideUp(),$(".numeraktu").slideUp(),$(".if-cudzoziemiec").slideUp(),$(".if-sprzedazprzed").slideUp(),$(".if-sprzedazwar").slideUp(),$(".if-przeniesienie").slideUp(),$(".if-dzialzniesienie").slideUp(),$(".if-dozywocie").slideUp(),$(".if-darowizna").slideUp(),$(".if-podzial").slideUp(),$(".if-deweloperska").slideUp(),$(".if-ustanowienie").slideUp(),$(".if-apd").slideUp()}),$("#select-type").change(function(){var e=$(this).val();"yes"==e?($(".other").slideUp(),$(".if-przedmiot-caller").slideDown()):"other"==e?($(".if-przedmiot-caller").slideUp(),$(".other").slideDown().css("display","flex")):($(".if-przedmiot-caller").slideUp(),$(".other").slideUp());var i=$(this).find(":selected"),s=i.data("price");"yes"==s?($(".if-withvalue").slideUp(),$(".if-withprice").slideDown().css("display","flex")):"value"==s?($(".if-withprice, .nextDiv").slideUp(),$(".if-withvalue").slideDown()):($(".if-withprice").slideUp(),$(".if-withprice, .nextDiv").slideUp(),$(".if-withvalue").slideUp()),"yes"==i.data("credit")?$(".if-withcredit").slideDown().css("display","flex"):$(".if-withcredit").slideUp(),"yes"==i.data("duty")?$(".if-6").slideDown().css("display","flex"):$(".if-6").slideUp();var d=i.data("ukur");"yes"==d?$(".if-ukur").slideDown().css("display","flex"):($(".if-ukur").slideUp(),$(".ukur").slideUp()),"yes"==i.data("lasy")&&"yes"==d&&$("#ukur").is(":checked")?$(".if-lasy").slideDown():$(".if-lasy").slideUp(),"yes"==i.data("tax")?$(".if-tax").slideDown().css("display","flex"):$(".if-tax").slideUp(),"yes"==i.data("othertax")?$(".if-othertax").slideDown().css("display","flex"):$(".if-othertax").slideUp(),"yes"==i.data("charge")?$(".if-charge").slideDown().css("display","flex"):$(".if-charge").slideUp(),"yes"==i.data("cudzoziemiec")?$(".if-cudzoziemiec").slideDown().css("display","flex"):$(".if-cudzoziemiec").slideUp(),"yes"==i.data("przeniesienie")?$(".if-przeniesienie").slideDown().css("display","flex"):$(".if-przeniesienie").slideUp(),"yes"==i.data("sprzedazwar")?$(".if-sprzedazwar").slideDown().css("display","flex"):$(".if-sprzedazwar").slideUp(),"yes"==i.data("sprzedazprzed")?$(".if-sprzedazprzed").slideDown().css("display","flex"):$(".if-sprzedazprzed").slideUp(),"yes"==i.data("darowizna")?$(".if-darowizna").slideDown().css("display","flex"):$(".if-darowizna").slideUp(),"yes"==i.data("dozywocie")?$(".if-dozywocie").slideDown().css("display","flex"):$(".if-dozywocie").slideUp(),"yes"==i.data("dzialzniesienie")?$(".if-dzialzniesienie").slideDown().css("display","flex"):$(".if-dzialzniesienie").slideUp(),"yes"==i.data("podzial")?$(".if-podzial").slideDown().css("display","flex"):$(".if-podzial").slideUp(),"yes"==i.data("deweloperska")?$(".if-deweloperska").slideDown().css("display","flex"):$(".if-deweloperska").slideUp(),"yes"==i.data("ustanowienie")?$(".if-ustanowienie").slideDown().css("display","flex"):$(".if-ustanowienie").slideUp(),"yes"==i.data("apd")?$(".if-apd").slideDown().css("display","flex"):$(".if-apd").slideUp()}),$("#selectobject").change(function(){"otherobject"==$(this).val()?$(".other-object").slideDown().css("display","flex"):$(".other-object").slideUp(),"yes"==$(this).find(":selected").data("first")?$(".type-1, .title-el").slideDown().css("display","flex"):$(".type-1, .title-el").slideUp()}),$("#ukur").change(function(){var e=$("#select-type").find(":selected"),i=e.data("ukur"),s=e.data("lasy");this.checked&&"yes"==i?$(".ukur").slideDown().css("display","flex"):$(".ukur").slideUp(),this.checked&&"yes"==i&&"yes"==s?$(".if-lasy").slideDown().css("display","flex"):$(".if-lasy").slideUp()}),$("#cenanieznana").change(function(){this.checked?($("#cena").prop("disabled",!0).val(""),$("#cena.changeinput").addClass("grayed"),$(".cena.changelabel").addClass("grayed")):($("#cena").prop("disabled",!1),$("#cena.changeinput").removeClass("grayed"),$(".cena.changelabel").removeClass("grayed"))}),$("#wartoscnieznana").change(function(){this.checked?($("#wartosc").prop("disabled",!0).val(""),$("#wartosc.changeinput").addClass("grayed"),$(".wartosc.changelabel").addClass("grayed")):($("#wartosc").prop("disabled",!1),$("#wartosc.changeinput").removeClass("grayed"),$(".wartosc.changelabel").removeClass("grayed"))}),$(".add-next").click(function(){$(this).slideUp();var e=$(this).data("next");$("#"+e).slideDown().css("display","flex")}),$(".add-next-final").click(function(){$(this).slideUp(),$(".next-final").slideDown().css("display","flex")}),$(".przelew").click(function(){$(this).parent().siblings(".account").slideDown().css("display","flex")}),$(".gotowka").click(function(){$(this).parent().siblings(".account").slideUp()}),$("#sposobnieznany").change(function(){this.checked?($("#sposob").prop("disabled",!0).val(""),$("#sposob.changeinput").addClass("grayed"),$(".sposob.changelabel").addClass("grayed")):($("#wartosc").prop("disabled",!1),$("#sposob.changeinput").removeClass("grayed"),$(".sposob.changelabel").removeClass("grayed"))}),$(".input-number").change(function(){var e=$(this).val(),i=$(this).siblings(".input-number").val();"0"!=e&&""!=e||"0"!=i&&""!=i?$(this).parent().parent().find("label").removeClass("grayed"):$(this).parent().parent().find("label").addClass("grayed")})}},$(function(){$(document).ready(function(){app.common.mainInit()})});