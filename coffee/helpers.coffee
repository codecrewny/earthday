puts = (str) -> console.log str # https://alpha.app.net/maxjacobson/post/3686793
delay = (s, func) -> setTimeout func, s*1000 # http://stackoverflow.com/a/6460151
smog = (action) ->
  if action is "fade in smog"
    $("#smoglayer").addClass "smoggy fadeIn"
    delay 1, -> $("#smoglayer").removeClass "fadeIn"
  else if action is "fade out smog"
    $("#smoglayer").addClass "fadeOut"
    delay 1, -> $("#smoglayer").removeClass "fadeOut smoggy"