(function () {
  var doc = document.documentElement;
  var drawer = document.getElementById("drawer");
  var overlay = document.getElementById("overlay");
  var hamb = document.getElementById("hamb");
  var closeBtn = document.getElementById("mclose");
  function setMenu(open) {
    if (!drawer) { return; }
    drawer.classList.toggle("open", open);
    overlay.classList.toggle("open", open);
    hamb.setAttribute("aria-expanded", open ? "true" : "false");
    doc.style.overflow = open ? "hidden" : "";
  }
  if (hamb) { hamb.addEventListener("click", function () { setMenu(true); }); }
  if (closeBtn) { closeBtn.addEventListener("click", function () { setMenu(false); }); }
  if (overlay) { overlay.addEventListener("click", function () { setMenu(false); }); }
  if (drawer) {
    drawer.addEventListener("click", function (e) {
      if (e.target.closest && e.target.closest("a")) { setMenu(false); }
    });
  }
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { setMenu(false); } });
  window.addEventListener("resize", function () { if (window.innerWidth > 768) { setMenu(false); } });
  var qs = document.querySelectorAll(".faq-q");
  Array.prototype.forEach.call(qs, function (q) {
    var a = document.getElementById(q.getAttribute("aria-controls"));
    q.addEventListener("click", function () {
      var open = q.getAttribute("aria-expanded") === "true";
      q.setAttribute("aria-expanded", open ? "false" : "true");
      a.classList.toggle("open", !open);
      a.style.maxHeight = open ? "0px" : a.scrollHeight + "px";
    });
  });
})();
