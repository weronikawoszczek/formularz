"use strict";app.common={mainInit:function(){$(".quest-initial #akt").click(function(){$(".if-1").slideDown(),$(".documents").slideUp()}),$(".quest-initial #poswiadczenie").click(function(){$(".documents").slideDown(),$(".if-1").slideUp(),$(".if-2").slideUp(),$(".other-object").slideUp(),$(".if-6").slideUp(),$(".if-3").slideUp(),$(".account").slideUp(),$(".nextDiv").slideUp(),$(".if-4").slideUp(),$(".if-5").slideUp(),$(".ukur").slideUp(),$(".if-7").slideUp(),$(".if-8").slideUp(),$(".if-9").slideUp(),$(".other-doc").slideUp(),$(".comments").slideUp()}),$(".quest-initial #inne").click(function(){$(".if-1").slideUp()}),$("#select-type").change(function(){var e=$(this).val();"yes"==e?($(".other").slideUp(),$(".if-2").slideDown()):"other"==e?($(".if-2").slideUp(),$(".other").slideDown().css("display","flex")):($(".if-2").slideUp(),$(".other").slideUp());var i=$(this).find(":selected"),s=i.data("price");"yes"==s?($(".if-4").slideUp(),$(".if-3").slideDown().css("display","flex")):"value"==s?($(".if-3").slideUp(),$(".if-4").slideDown()):($(".if-3").slideUp(),$(".if-4").slideUp()),"yes"==i.data("credit")?$(".if-5").slideDown().css("display","flex"):$(".if-5").slideUp(),"yes"==i.data("duty")?$(".if-6").slideDown().css("display","flex"):$(".if-6").slideUp(),"yes"==i.data("tax")?$(".if-7").slideDown().css("display","flex"):$(".if-7").slideUp(),"yes"==i.data("othertax")?$(".if-8").slideDown().css("display","flex"):$(".if-8").slideUp(),"yes"==i.data("charge")?$(".if-9").slideDown().css("display","flex"):$(".if-9").slideUp()}),$("#selectobject").change(function(){"otherobject"==$(this).val()?$(".other-object").slideDown().css("display","flex"):$(".other-object").slideUp()}),$("#ukur").change(function(){this.checked?$(".ukur").slideDown().css("display","flex"):$(".ukur").slideUp()}),$("#cenanieznana").change(function(){this.checked?($("#cena").prop("disabled",!0).val(""),$("#cena.changeinput").addClass("grayed"),$(".cena.changelabel").addClass("grayed")):($("#cena").prop("disabled",!1),$("#cena.changeinput").removeClass("grayed"),$(".cena.changelabel").removeClass("grayed"))}),$("#wartoscnieznana").change(function(){this.checked?($("#wartosc").prop("disabled",!0).val(""),$("#wartosc.changeinput").addClass("grayed"),$(".wartosc.changelabel").addClass("grayed")):($("#wartosc").prop("disabled",!1),$("#wartosc.changeinput").removeClass("grayed"),$(".wartosc.changelabel").removeClass("grayed"))}),$(".add-next").click(function(){$(this).slideUp();var e=$(this).data("next");$("#"+e).slideDown().css("display","flex")}),$(".add-next-final").click(function(){$(this).slideUp(),$(".next-final").slideDown().css("display","flex")}),$("#przelew").click(function(){$(".account").slideDown().css("display","flex")}),$("#gotowka").click(function(){$(".account").slideUp()}),$(".inny").click(function(){var e=$(this).data("date");$("#"+e).slideDown().css("display","flex")}),$(".tensam").click(function(){var e=$(this).data("date");$("#"+e).slideUp()}),$("#sposobnieznany").change(function(){this.checked?($("#sposob").prop("disabled",!0).val(""),$("#sposob.changeinput").addClass("grayed"),$(".sposob.changelabel").addClass("grayed")):($("#wartosc").prop("disabled",!1),$("#sposob.changeinput").removeClass("grayed"),$(".sposob.changelabel").removeClass("grayed"))}),$(".input-number").change(function(){var e=$(this).val(),i=$(this).siblings(".input-number").val();console.log("inputValue = "+e),console.log("inputValueIs = "+i),"0"!=e&&""!=e||"0"!=i&&""!=i?$(this).parent().parent().find("label").removeClass("grayed"):$(this).parent().parent().find("label").addClass("grayed")})}},$(function(){$(document).ready(function(){app.common.mainInit()})});