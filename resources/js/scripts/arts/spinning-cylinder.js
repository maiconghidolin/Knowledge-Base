
(function (window, document, $) {
  'use strict';

  var circles = $('.circle');

  circles.each(function () {
    var circle = $(this);
    const text = circle.html();
    circle.html('');        
    circle.css('--numchs', text.length);
    for ( let i = 0; i < text.length; i++ ) {
      circle.html(circle.html() + '<div class="char" style="--char-index: ' + i + ';">' + text.charAt(i) + '</div>')
    }
  });


})(window, document, jQuery);
