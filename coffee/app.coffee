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
  years_graph() # appends the graph to slide 13

  $("nav > button").on "click", ->
    cache = n
    dir = $(this).attr "id"
    if dir is "next"
      n++ unless n >= slides.length
    else if dir is "prev"
      n-- unless n <= 1
    if cache isnt n
      cache = $("#slide#{cache}")
      cache.addClass "bounceOutRight" if dir is "prev"
      cache.addClass "bounceOutLeft" if dir is "next"
      delay 0.5, ->
        cache.removeClass("bounceOutRight bounceOutLeft").hide()
        slide = $("#slide#{n}")
        slide.show().addClass "bounceInLeft" if dir is "prev"
        slide.show().addClass "bounceInRight" if dir is "next"
        delay 1, -> slide.removeClass "bounceInLeft bounceInRight"
        year = slide.attr "year"
        $("#year").text year
        document.title = "(#{n}/#{slides.length}) Earth Day"
        history.pushState {}, "switching slides", "/earthday/#slide#{n}"
    else
      cache = $("#slide#{cache}")
      cache.addClass "wiggle"
      delay 1, ->
        cache.removeClass "wiggle"
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
