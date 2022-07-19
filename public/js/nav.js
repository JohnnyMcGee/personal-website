var lastScrollTop; // This Varibale will store the top position

navbar = document.getElementById("nav"); // Get The NavBar

document.getElementsByTagName('body')[0].onscroll = () => {
    console.log("scrolling");
};
