(function () {
  var t = document.querySelector('.nav-toggle'), n = document.getElementById('nav');
  if (t && n) {
    t.addEventListener('click', function () {
      var open = n.classList.toggle('open');
      t.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    n.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { n.classList.remove('open'); t.setAttribute('aria-expanded', 'false'); }
    });
  }
  var y = document.getElementById('yr');
  if (y) y.textContent = new Date().getFullYear();
})();
