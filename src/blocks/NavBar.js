import React from "react";
let myNavBar = document.querySelector("#myNavBar");
const animatedNavBar = function () { 
 
   if(window.pageYOffset >= myNavBar.dataset.offset) {

    myNavBar.classList.add("activeTop");

   } else {
       myNavBar.classList.remove("activeTop");
   };
   console.log(window.pageYOffset);
};
document.body.onscroll = animatedNavBar;

const NavBar = () => {
  return (
<nav>
  <ul id="myNavBar" data-offset="100">
    <li><a class="active" href="#home">Home</a></li>
    <li><a href="#news">News</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#about">About</a></li>
  </ul>
</nav>
 );
}

export default NavBar;