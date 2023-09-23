

function toggleMenu() {
  var menu = document.getElementById("menu-items");
  if (menu.style.display === "none") {
  menu.style.display = "block";
  } else {
  menu.style.display = "none";
  }
}
document.getElementById("menu-button").addEventListener("click", toggleMenu);

