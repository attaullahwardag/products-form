var products = [{
    name: "Addidas",
    price: "200",
    img: "images/addidas.jpg"

},
{
    name: "Nike",
    price: "300",
    img: "images/nike.jpeg"
},
{
    name: "Reebok",
    price: "305",
    img: "images/reebok.jpeg"
}
];

const brand = document.getElementById("product");
const price = document.getElementById("price");
const qty = document.getElementById("qty");
const img = document.getElementById("product-img");
const total = document.getElementById('total');

brand.addEventListener('change', function(e){
    if (e.target.value === products[0].name){
        price.value = products[0].price;
        img.src = products[0].img;
        total.value = price.value * qty.value
    }
    else if(e.target.value === products[1].name)
    {
        price.value = products[1].price;
        img.src = products[1].img;
        total.value = price.value * qty.value
    }
    else if(e.target.value === products[2].name)
    {
        price.value = products[2].price;
        img.src = products[2].img;
        total.value = price.value * qty.value
    }
    else if(e.target.value === "select"){
        price.value = 0;
        total.value = 0;
        img.src = "no.png";
    }
});

qty.addEventListener('change', function(e){
    
    if(e.target.value > 0){
        total.value = e.target.value * price.value;
    }
    else if(e.target.value === 0 ){
        total.value = 0;
    }
});