(function(){var t;window.delay_timers={},window.delay=function(t,i,e){return window.delay_timers[t]&&clearTimeout(window.delay_timers[t]),window.delay_timers[t]=setTimeout(i,e)},t=function(){return $("[data-auto-submit]").change(function(){return $(this).parents("form").submit()})},$(t)}).call(this);