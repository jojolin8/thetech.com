(function(){var t;t=function(t,e){return e?($("[data-hide-on="+t+"]").hide(),$("[data-show-on="+t+"]").show()):($("[data-hide-on="+t+"]").show(),$("[data-show-on="+t+"]").hide())},$(document).on("click","[data-hide-trigger]",function(){var e;if(e=$(this).data("hide-trigger"),$(this).is(":checkbox"))t(e,$(this).prop("checked"));else if($(this).is("a"))return t(e,$(this).data("hide-value")),!1;return!0})}).call(this);