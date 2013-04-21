$ ->
  $(".smogbuttons > button").on "click", ->
    $(this).attr "disabled", "true"
    $(this).siblings().removeAttr "disabled"
    smog $(this).text()
