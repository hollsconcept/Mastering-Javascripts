const data = [
    {
        id:1,
        name:"Hilfer Boxer",
        img:"./images/boxer2.jpg",
        price:100,
        cat:"clothing",
    },
    {
        id:11,
        name:"50 cent boxer",
        img:"./images/boxer3.jpg",
        price:120,
        cat:"clothing",
    },
    {
        id:2,
        name:"Timex men boxer",
        img:"./images/boxer4.jpg",
        price:130,
        cat:"clothing",
    },
    {
        id:2,
        name:"WWimex men boxer",
        img:"./images/boxer5.jpg",
        price:110,
        cat:"clothing",
    },
   {
    id:3,
    name:"Qimex men boxer",
    img:"images/boxer6.jpg",
    price:140,
    cat:"clothing",
   },
   {
    id:3,
    name:"Bimex men boxer",
    img:"./images/boxers.jpg",
    price:180,
    cat:"clothing",
   },
];

const productContainer = document.querySelector(".products")
const searchInput = document.querySelector(".search")
const categoriesContainer = document.querySelector(".categories")
const priceRange = document.querySelector(".priceRange")
const priceValue = document.querySelector(".priceValue")

const displayProducts = (filteredProducts)=>{
    productContainer.innerHTML = filteredProducts.map((product)=>
        `
        <div class="product">
                    <img src=${product.img} alt="">
                
                    <span class="name">${product.name}</span>
                    <span class="priceTest">
                   $${product.price}
                    </span>
                </div>
        `
    
    ).join("");
}

displayProducts(data)

searchInput.addEventListener("keyup",(e)=>{
    const value = e.target.value.toLowerCase();
    if(value){displayProducts(data.filter((item)=>item.name.toLowerCase().indexOf(value) !==-1)

)}else{
        displayProducts(data)
    }
})