const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "Klassik",
        price: 700,
        colors: [
            {
                code: "black",
                img: "file:///C:/Users/User/Desktop/shoes_Front/img/gara%20klassik-fotor-bg-remover-2023120911838.png"
            },
            {
                code: "darkblue",
                img: "file:///C:/Users/User/Desktop/shoes_Front/img/gok%20klassik-fotor-bg-remover-2023120911959.png"
            },
        ],
    },
    {
        id: 2,
        title: "Comfort",
        price: 100,
        colors: [
            {
                code: "black",
                img: "file:///C:/Users/User/Desktop/shoes_Front/img/gara%20komfort-fotor-bg-remover-20231209111032.png"
            },
            {
                code: "darkblue",
                img: "file:///C:/Users/User/Desktop/shoes_Front/img/gok%20komfort-fotor-bg-remover-20231209111114.png"
            },
        ],
    },
    {
        id: 3,
        title: "Kids",
        price: 900,
        colors: [
            {
                code: "black",
                img: "file:///C:/Users/User/Desktop/shoes_Front/img/gara%20kids-fotor-bg-remover-2023120911135.png"
            },
            {
                code: "darkblue",
                img: "file:///C:/Users/User/Desktop/shoes_Front/img/gok%20kids-fotor-bg-remover-20231209111343.png"
            },
        ],
    },
    {
        id: 4,
        title: "Sport",
        price: 400,
        colors: [
            {
                code: "black",
                img: "file:///C:/Users/User/Desktop/shoes_Front/img/sport%20gara-fotor-bg-remover-20231209111411.png"
            },
            {
                code: "darkblue",
                img: "file:///C:/Users/User/Desktop/shoes_Front/img/sport%20gok-fotor-bg-remover-20231209111442.png"
            },
        ],
    },
    {
        id: 5,
        title: "Adik",
        price: 500,
        colors: [
            {
                code: "black",
                img: "file:///C:/Users/User/Desktop/shoes_Front/img/gara%20adik-fotor-bg-remover-20231209111158.png"
            },
            {
                code: "gray",
                img: "file:///C:/Users/User/Desktop/shoes_Front/img/gok%20adik-fotor-bg-remover-20231209111228.png"
            },
        ],
    },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        choosenProduct = products[index]

        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "TMT" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        currentProductColors.forEach((color,index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    })
});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click", ()=>{
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black"
        size.style.color = "white"

    });
});