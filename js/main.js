/* =========================================================
   Karim Hussein — personal site
   Task 3, Lime Light internship.
   ========================================================= */

(function () {
  "use strict";

  // On a phone the menu stays open after a link is tapped, which
  // leaves the reader looking at the menu instead of the section
  // they asked for. Close it on the way.
  var menu = document.getElementById("navLinks");
  var links = document.querySelectorAll("#navLinks .nav-link");

  Array.prototype.forEach.call(links, function (link) {
    link.addEventListener("click", function () {
      if (menu.classList.contains("show")) {
        var panel = bootstrap.Collapse.getOrCreateInstance(menu);
        panel.hide();
      }
    });
  });
})();
