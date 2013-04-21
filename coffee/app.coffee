$ ->
  current_url = document.URL
  pattern = /earthday\/#(.+)$/
  n = 0 # which slide to show (will add one to this)
  if current_url.match pattern
    str = current_url.match(pattern)[1]
    pattern2 = /slide([\d]+)$/
    if str.match(pattern2)
      n = parseInt(str.match(pattern2)[1]) - 1
  else
    history.pushState {}, "welcome", "/earthday/#slide1"

  slides = $(".slide")

  $("nav > button").on "click", ->
    $("#slide#{n}").hide()
    dir = $(this).attr "id"
    if dir is "next"
      n++ unless n >= slides.length
    else if dir is "prev"
      n-- unless n <= 1
    slide = $("#slide#{n}")
    slide.show()
    year = slide.attr "year"
    $("#year").text year
    document.title = "(#{n}/#{slides.length}) Earth Day"
    history.pushState {}, "switching slides", "/earthday/#slide#{n}"
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
    if key is 39
      $("#next").click()
