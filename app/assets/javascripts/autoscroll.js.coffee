$(window).scroll ->
  if $(window).scrollTop() + $(window).height() > $(document).height() - 100
    $('[data-autoscroll-loading]').html("<i class='fa fa-circle-o-notch fa-spin'></i>")

    if $('[data-autoscroll-target]').length > 0
      console.log($('[data-autoscroll-target]').data('autoscroll-target'))
      $('#autoscroll_link').attr("href", $('[data-autoscroll-target]').data('autoscroll-target'))
      $.rails.handleRemote($('#autoscroll_link'))
  return