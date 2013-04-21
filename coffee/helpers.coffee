puts = (str) -> console.log str
yell = (str) -> alert str
delay = (s, func) -> setTimeout func, s*1000 # http://stackoverflow.com/a/6460151
window.go_home = ->
  history.pushState {}, "welcome", "/earthday/"
  location.reload()
adjust_smog = (n, p) -> # slideN, slidePrevious
  len = 13
  severity = len - n
  if severity < len/3
    $("#smog").removeClass "smoggy"
  else if severity < len/2
    if n > p
      $("#smog").addClass "smoggy"
    else
      $("#smog").removeClass "pollutiony"
  else
    $("#smog").addClass "smoggy"
    $("#pollution").addClass "pollutiony"

# smog = (action) ->
#   if action is "clean air"
#     $(".effects").children().addClass "fadeOut"
#     delay 1, ->
#       $(".effects").children().removeClass "fadeOut smog pollution"
#   else if action is "smoggy air"
#     $("#smog").addClass "smog fadeIn"
#     delay 1, ->
#       $("#smog").removeClass "fadeIn"
#     $("#pollution").addClass "fadeOut"
#     delay 1, ->
#       $("#pollution").removeClass "pollution"
#   else if action is "pollution"
#     $("#smog").addClass "smog fadeIn"
#     delay 1, -> $("#smog").removeClass "fadeIn"
#     $("#data").addClass "pollution animated fadeIn"
#     $("#pollution").addClass "pollution fadeIn"
#     delay 1, -> $("#pollution").removeClass "fadeIn"

