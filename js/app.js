// Generated by CoffeeScript 1.6.2
(function() {
  var delay, puts, smog, yell;

  $(function() {
    var current_url, n, pattern, pattern2, slides, str;

    current_url = document.URL;
    pattern = /earthday\/#(.+)$/;
    n = 0;
    if (current_url.match(pattern)) {
      str = current_url.match(pattern)[1];
      pattern2 = /slide([\d]+)$/;
      if (str.match(pattern2)) {
        n = parseInt(str.match(pattern2)[1]) - 1;
      }
    } else {
      history.pushState({}, "welcome", "/earthday/#slide1");
    }
    slides = $(".slide");
    $("nav > button").on("click", function() {
      var cache, dir;

      cache = n;
      dir = $(this).attr("id");
      if (dir === "next") {
        if (!(n >= slides.length)) {
          n++;
        }
      } else if (dir === "prev") {
        if (!(n <= 1)) {
          n--;
        }
      }
      if (cache !== n) {
        cache = $("#slide" + cache);
        if (dir === "prev") {
          cache.addClass("bounceOutRight");
        }
        if (dir === "next") {
          cache.addClass("bounceOutLeft");
        }
        return delay(0.5, function() {
          var slide, year;

          cache.removeClass("bounceOutRight bounceOutLeft").hide();
          slide = $("#slide" + n);
          if (dir === "prev") {
            slide.show().addClass("bounceInLeft");
          }
          if (dir === "next") {
            slide.show().addClass("bounceInRight");
          }
          delay(1, function() {
            return slide.removeClass("bounceInLeft bounceInRight");
          });
          year = slide.attr("year");
          $("#year").text(year);
          document.title = "(" + n + "/" + slides.length + ") Earth Day";
          return history.pushState({}, "switching slides", "/earthday/#slide" + n);
        });
      } else {
        cache = $("#slide" + cache);
        cache.addClass("wiggle");
        return delay(1, function() {
          return cache.removeClass("wiggle");
        });
      }
    });
    $("#next").click();
    $(".smogbuttons > button").on("click", function() {
      $(this).attr("disabled", "true");
      $(this).siblings().removeAttr("disabled");
      return smog($(this).text());
    });
    return $("html").keyup(function(event) {
      var key;

      key = event.which;
      if (key === 37) {
        $("#prev").click();
      }
      if (key === 39) {
        return $("#next").click();
      }
    });
  });

  puts = function(str) {
    return console.log(str);
  };

  yell = function(str) {
    return alert(str);
  };

  delay = function(s, func) {
    return setTimeout(func, s * 1000);
  };

  window.go_home = function() {
    history.pushState({}, "welcome", "/earthday/");
    return location.reload();
  };

  smog = function(action) {
    if (action === "clean air") {
      $(".effects").children().addClass("fadeOut");
      return delay(1, function() {
        return $(".effects").children().removeClass("fadeOut smog pollution");
      });
    } else if (action === "smoggy air") {
      $("#smog").addClass("smog fadeIn");
      delay(1, function() {
        return $("#smog").removeClass("fadeIn");
      });
      $("#pollution").addClass("fadeOut");
      return delay(1, function() {
        return $("#pollution").removeClass("pollution");
      });
    } else if (action === "pollution") {
      $("#smog").addClass("smog fadeIn");
      delay(1, function() {
        return $("#smog").removeClass("fadeIn");
      });
      $("#data").addClass("pollution animated fadeIn");
      $("#pollution").addClass("pollution fadeIn");
      return delay(1, function() {
        return $("#pollution").removeClass("fadeIn");
      });
    }
  };

}).call(this);
