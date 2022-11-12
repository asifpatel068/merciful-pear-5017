
let cart_Items =JSON.parse(localStorage.getItem("cartdata")) || []
let count =Number(localStorage.getItem("Count") )|| 0;

let total=localStorage.getItem("total")|| 0;

console.log("11")
displayItem(cart_Items)


function displayItem(data){
total=0;
count=0;
document.querySelector(".container").textContent=""

data.map(function (ele,i){
    console.log("gddsd")
    let divx = document.createElement("div");

    let div1 = document.createElement("div");
    let image = document.createElement("img")
    image.setAttribute("src",ele.image)

    let brand = document.createElement("p")
    brand.textContent = ele.brand
    brand.setAttribute("class","brandFont")

    let name = document.createElement("p")
    name.textContent = ele.name
    name.setAttribute("class","nameFont")

    let price = document.createElement("p")
    price.textContent= "€"+" "+ ele.price
    price.setAttribute("class","price")
    
    total+=Number(ele.price);
    localStorage.setItem("total",total)
    document.querySelector("#stotal").innerText="Sub Total -€"+total
    document.querySelector("#total").innerText="Grand Total -€"+total
    console.log(ele.price)


    let button = document.createElement("button")
    button.textContent="X Remove"
    button.addEventListener("click", function(){
        count--;
        localStorage.setItem("Count",count)
    
        removItem(ele,i)
    
    })
    let button1 = document.createElement("button")
    button1.textContent="♡ Add to wishlist"
    
    let divButton = document.createElement("div");
    divButton.setAttribute("class","divButton")

    let hr = document.createElement("hr");

    let div2 = document.createElement("div");
    let quantity = document.createElement("p");
    quantity.textContent=1

    let price2 = document.createElement("p")
    price2.textContent= "€"+" "+quantity.textContent*Number(ele.price);

    let  divy = document.createElement("div");

    div1.append(image)
    divButton.append(button,button1)
    div2.append(brand,name,divButton)

    divx.append(div1,div2)
    divy.append(price,quantity,price2)

    let  divU = document.createElement("div");

    divU.append(divx,divy)
    document.querySelector(".container").append(divU,hr)

})


}
function removItem(ele,i){
    cart_Items.splice(i,1)
    displayItem(cart_Items)
    localStorage.setItem("cartdata",JSON.stringify(cart_Items))
}
