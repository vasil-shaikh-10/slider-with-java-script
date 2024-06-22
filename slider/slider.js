let allslider = [
    {
        src:"https://cdn.motor1.com/images/mgl/Ooz6WB/s1/bmw-i7-m70-xdrive-2023.jpg",
        name: "BMW X6",
    },
    {
        src:"https://www.bmw-me.com/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-04.jpg",
        name: "BMW M5",
    },
    {
        src:"https://www.bmw.in/content/dam/bmw/common/topics/offers-and-services/bmw-special-sales-2020/protection-vehicle/bmw-css-7-series-protection-ms-new-standard.jpg",
        name: "BMW i7",
    },
    {
        src:"https://img-ik.cars.co.za/news-site-za/images/2023/01/P90491599_highRes_the-bmw-740i-in-sout-scaled.jpg?tr=h-347,w-617",
        name: "BMW CLASS V",
    },
    {
        src:"https://images.hgmsites.net/hug/2017-bmw-i8_100558529_h.jpg",
        name: "BMW i8",
    },
    {
        src:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202103/03_The_all-new_BMW_M_1000_RR_1200x768.jpeg?size=690:388",
        name: "BMW S1000RR",
    },
]


allslider.forEach((val , index) => {
    let slider = document.getElementById("slider");
    let div = document.createElement("div");
    let img = document.createElement("img");
    let par = document.createElement("h3");

    img.src = val.src;
    par.innerHTML = val.name;
    div.classList.add("slide")
    par.className = "text"


    div.append(img);
    div.append(par);
    slider.append(div);
})
function Slider() {

    const carouselSlides = document.querySelectorAll('.slide');
    const btnPrev = document.querySelector('.prev');
    const btnNext = document.querySelector('.next');
    const dotsSlide = document.querySelector('.dots-container');
    let currentSlide = 0;
  
    const activeDot = function (slide) {
        document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
        document.querySelector(`.dot[data-slide="${slide}"]`).classList.add('active');
    };
    activeDot(currentSlide);

    const changeSlide = function (slides) {
        carouselSlides.forEach((slide, index) => (slide.style.transform = `translateX(${100 * (index - slides)}%)`));
    };
    changeSlide(currentSlide);

    btnNext.addEventListener('click', function () {
        currentSlide++; 
        if (carouselSlides.length - 1 < currentSlide) {
            currentSlide = 0;
        };
        changeSlide(currentSlide);
        activeDot(currentSlide);
});
    btnPrev.addEventListener('click', function () {
        currentSlide--;
        if (0 >= currentSlide) {
            currentSlide = 0;
        }; 
        changeSlide(currentSlide);
        activeDot(currentSlide);
    });

    dotsSlide.addEventListener('click', function (e) {
        if (e.target.classList.contains('dot')) {
            const slide = e.target.dataset.slide;
            changeSlide(slide);
            activeDot(slide);
        }
    });
  };
Slider();
