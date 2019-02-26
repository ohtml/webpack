(function () {
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        var clientWidth = document.documentElement.clientWidth;
        var clientHeight = document.documentElement.clientHeight;
        if (!clientWidth) return;
        if (!clientHeight) return;
        if (clientWidth / clientHeight <= 0.5625) {
          document.documentElement.style.fontSize = 100 * (clientWidth / 375) + 'px';
        } else {
          window.maxWidth = clientHeight * 0.5625;
          document.documentElement.style.fontSize = 100 * (window.maxWidth / 375) + 'px';
        }
      };
    window.addEventListener(resizeEvt, recalc, false);
    window.addEventListener('DOMContentLoaded', recalc, false);
    recalc();
  })();
  