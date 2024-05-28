// page center


function pad_calc()
{
  var winwidth = $(window).width()-1900;
  var winwidth =  winwidth/2;
  if(winwidth<0){
    winwidth=0;
  }
  $(".left-padding").css("paddingLeft",winwidth+"px");
  $(".right-padding").css("paddingRight",winwidth+"px");
  console.log(winwidth);
}
$( document ).ready(function() {
  pad_calc();
});
$(window).resize(function() {
  pad_calc();
});



// nav


// Search box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");

searchBox.addEventListener("click", () => {
  navbar.classList.toggle("showInput");
  if (navbar.classList.contains("showInput")) {
    searchBox.classList.replace("bx-search", "bx-x");
  } else {
    searchBox.classList.replace("bx-x", "bx-search");
  }
});

// Sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");

menuOpenBtn.onclick = function() {
  navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
  navLinks.style.left = "-100%";
}

// Sidebar submenu open close js code
let dropdownArrows = document.querySelectorAll(".dropdown-arrow");

dropdownArrows.forEach(arrow => {
  arrow.onclick = function() {
    let subMenu = arrow.nextElementSibling;
    let allSubMenus = document.querySelectorAll(".dropdown-menu");
    let allArrows = document.querySelectorAll(".dropdown-arrow");

    allSubMenus.forEach(menu => {
      if (menu !== subMenu) {
        menu.style.display = "none";
      }
    });

    allArrows.forEach(arrowItem => {
      if (arrowItem !== arrow) {
        arrowItem.style.transform = "rotate(0deg)";
      }
    });

    subMenu.style.display = subMenu.style.display === "block" ? "none" : "block";
    arrow.style.transform = arrow.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
  }
});










// explore slider

$('.explore-slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    prevArrow:'<span class="pre_arrow"><i class="fa-solid fa-chevron-left"></i></span>',
nextArrow:'<span class="next_arrow"><i class="fa-solid fa-chevron-right"></i></span>',
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


// logo slider

$('.logo-slide').slick({
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
  


// testimonial slider

$('.testimonial-slider').slick({
  dots: false,
  infinite: true,
  prevArrow:'<span class="pre_arrow"><i class="fa-solid fa-chevron-left"></i></span>',
  nextArrow:'<span class="next_arrow"><i class="fa-solid fa-chevron-right"></i></span>',
  arrows: true,
  // autoplay: true,
  // autoplaySpeed: 2000,
  infinite: true,
  slidesToShow: 3.5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


// counter

let counter = document.querySelectorAll(".counter")
let arr = Array.from(counter)

arr.map((item)=>{
    let count = 0

    function CounterUp(){
        count++
        item.innerHTML = count
        if(count == item.dataset.number){
            clearInterval(stop);
        }
    }
    let stop = setInterval(
        function(){
            CounterUp();
        },100/item.dataset.speed
    );
})


