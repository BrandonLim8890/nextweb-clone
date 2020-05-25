window.onscroll = () => {
  myFunction()
};

let navbar = document.querySelector('.sticky-nav')

let sticky = navbar.offsetTop;

let myFunction = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}