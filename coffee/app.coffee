$ ->
  $(".smogbuttons > button").on "click", ->
    $(this).attr "disabled", "true"
    puts $(this).siblings().removeAttr "disabled"
    if $(this).text() is "fade in smog"
      $("#smoglayer").addClass "smoggy fadeIn"
      delay 1, -> $("#smoglayer").removeClass "fadeIn"
    else if $(this).text() is "fade out smog"
      $("#smoglayer").addClass "fadeOut"
      delay 1, -> $("#smoglayer").removeClass "fadeOut smoggy"
