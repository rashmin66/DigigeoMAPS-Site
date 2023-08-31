// functions for change custom buttons color when onlick
function toggleHighlight(button) {
    const buttons = document.querySelectorAll(".custom-button");
    const containers = document.querySelectorAll(".sidebar-container");
    containers.forEach((container) => {
        container.style.display = "none";
    });
    containers[button.id].style.display = "block";

    buttons.forEach((element) => {
        element.classList.remove("highlighted");
    });
    button.classList.toggle("highlighted");
}

//   function for navbar-links mobile view
const toggleButton = document.getElementById("toggleButton");
const navLinks = document.getElementById("navLinks");

toggleButton.addEventListener("click", function () {
    console.log(navLinks);
    navLinks.classList.toggle("show-nav");
    console.log(toggleButton);
});

//function for mapicon handle
function handleIconClick(iconNumber) {
    console.log("Icon " + iconNumber + " clicked.");
}

//function for grid change when button click
let isGridChanged = false;
function changeGrid() {
    const sideBar = document.getElementById("side-bar");
    const mapview = document.getElementById("map-View")
   
        if (isGridChanged) {
            // Show the popup
            sideBar.style.display = "block";
            mapview.style.display = "none";

        } else {
            // Hide the popup
            sideBar.style.display = "none";
            mapview.style.display = "block";
    }
    isGridChanged = !isGridChanged; // Toggle the state
}



//function for search bar
const searchBar = document.getElementById("searchBarr");
const feature = document.getElementById("feature");
const iconRight = document.getElementById("icon-right");
const companies = document.getElementById("companies");
const tooltip = document.getElementById("tooltip");
const areaContainer = document.getElementById("container-1");
//add event listner for the search input
searchBar.addEventListener("input", function (event) {
    const searchText = event.target.value;
    console.log("Search text:", iconRight);
    feature.style.display = "block";
    companies.style.display = "block";
    iconRight.src = "./assets/cross.png";
    
});

// Add event listener for the cross icon click
iconRight.addEventListener("click", function () {
    // Hide the elements
    feature.style.display = "none";
    companies.style.display = "none";
    tooltip.style.visibility = "hidden";

    // Reset the icon source
    iconRight.src = "./assets/tabler_direction-sign.svg";

    // Clear the search input field
    searchBar.value = "";
});

//add event listner for search bar click
searchBar.addEventListener("click", function (event) {
    tooltip.style.visibility = "visible";
});


// <!-- script for close card popup -->
  
document.addEventListener("DOMContentLoaded", function () {
    const popupCards =  document.querySelectorAll(".popup-card-div");
    const popupClose = document.querySelectorAll(".popup-close-button")
    
   for (let index = 0; index < popupCards.length; index++) {
   
    popupClose[index].addEventListener("click", function () {
        popupCards[index].style.display = "none";
    });
   }


});

// function for showing popup cards
const popupCard1 = document.getElementById("pop-up-card-1");
function showPopUp1() {
    popupCard1.style.display = "block";
}

const popupCard2 = document.getElementById("pop-up-card-2");
function showPopUp2() {
    popupCard2.style.display = "block";
}

const popupCard3 = document.getElementById("pop-up-card-3");
function showPopUp3() {
    popupCard3.style.display = "block";
}
const popupCard4 = document.getElementById("pop-up-card-4");
function showAssetPopUp1() {
    popupCard4.style.display = "block";
}
const popupCard5 = document.getElementById("pop-up-card-5");
function showAssetPopUp2() {
    popupCard5.style.display = "block";
}
const popupCard6 = document.getElementById("pop-up-card-6");
function showNavPopUp1() {
    popupCard6.style.display = "block";
    overlay.style.display = "block";
}
const popupCard7 = document.getElementById("pop-up-card-7");
function showNavPopUp2() {
    popupCard7.style.display = "block";
    overlay.style.display = "block";
}

//function for tree view
$(function () {
    $(".tree li:has(ul)")
        .addClass("parent_li")
        .find(" > span")
        .attr("title", "Collapse this branch");
    $(".tree li.parent_li > span").on("click", function (e) {
        var children = $(this).parent("li.parent_li").find(" > ul > li");
        if (children.is(":visible")) {
            children.hide("fast");
            $(this)
                .attr("title", "Expand this branch")
                .find(" > i")
                .addClass("fas fa-angle-right")
                .removeClass("fas fa-angle-down");
        } else {
            children.show("fast");
            $(this)
                .attr("title", "Collapse this branch")
                .find(" > i")
                .addClass("fas fa-angle-down")
                .removeClass("fas fa-angle-right");
        }
        e.stopPropagation();
    });
});


