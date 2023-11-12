function toggleSideMenu() {
  var sideMenu = document.getElementById("sideMenu");
  if (sideMenu.style.display == "block") {
    sideMenu.style.display = "none";
  } else {
    sideMenu.style.display = "block";
  }
}
var sidemenu = document.getElementById("sideMenu");
function logScreenSize() {
  var screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  if (screenWidth < 600) {
    sidemenu.style.display = "none";
  }
  if (screenWidth >= 600) {
    sidemenu.style.display = "block";
  }
}
logScreenSize();

window.addEventListener("resize", logScreenSize);
