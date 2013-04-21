puts = (str) -> console.log str
yell = (str) -> alert str
delay = (s, func) -> setTimeout func, s*1000 # http://stackoverflow.com/a/6460151
window.go_home = ->
  history.pushState {}, "welcome", "/earthday/"
  location.reload()
adjust_smog = (year) ->
  yr = parseInt(year, 10)
  if year is "" or yr < 1992 # first few slides
    $(".effects").children().addClass "smoggy pollutiony"
  else if yr < 2000
    $("#smog").addClass "smoggy"
    $("#pollution").removeClass "pollutiony"
  else
    $(".effects").children().removeClass "smoggy pollutiony"

