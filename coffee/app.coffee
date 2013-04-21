$ ->
  n = 0 # which slide to show
  slides = $(".slide")
  $("nav > button").on "click", ->
    $("#slide#{n}").hide()
    dir = $(this).attr "id"
    if dir is "next"
      n++ unless n >= slides.length - 1
    else if dir is "prev"
      n-- unless n <= 1
    slide = $("#slide#{n}")
    slide.show()
    year = slide.attr "year"
    $("#year").text year
    document.title = "(#{n}/#{slides.length-1}) Earth Day"
  $("#next").click()



  $(".smogbuttons > button").on "click", ->
    $(this).attr "disabled", "true"
    $(this).siblings().removeAttr "disabled"
    smog $(this).text()


  $("html").keyup (event) ->
    key = event.which
    # right is 39
    # left is 37
    if key is 37
      $("#prev").click()
      # return false
    if key is 39
      $("#next").click()
      # return false
