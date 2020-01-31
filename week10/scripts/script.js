/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars:
true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

// Scroll-event
window.onscroll = function () {
    stickyNav();
};

// Header aanroepen
var header = document.getElementById("mijnHeader");

// Offset positie van de header
var sticky = header.offsetTop;

// Sticky class toevoegen bij bereiken scroll positie en weer verwijderen bij verlaten scroll positie
function stickyNav() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Alfabetisch sorteren
/*function sortListDir() {
  var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
  list = document.getElementById("id01");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    b = list.getElementsByTagName("a");
    for (i = 0; i < (b.length - 1); i++) {
      shouldSwitch = false;

      if (dir == "asc") {
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {

          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {

          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {

      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
      switchcount ++;
    } else {

      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}*/
