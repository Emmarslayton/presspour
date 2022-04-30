function getProducts(filepath)
{
    fetch(filepath).then((result) => result.json()).then(function (productData)
    {DisplayProducts(productData)})
};
function DisplayProducts(productData) 
{
    myCart = document.getElementById('shoppics')
    productData.products.forEach(function(product){
        ProduceProducts(myCart, product)});
};

function ProduceProducts(myArea, product)
{
    let newCard= document.createElement('div')
    let newData1 = document.createElement('div')
    let newData2 = document.createElement('div')
    let newData3 = document.createElement('div')
    let newData4 = document.createElement('div')
    let newData5 = document.createElement('div')
    let newImg = document.createElement('img')

    newCard.class ='apparel'
    newData1.textContent = `Product ID: ${product.ID}`
    newData2.textContent = `Name: ${product.Name}`
    newData3.textContent = `Price: ${product.Price}`
    newData4.textContent = `Description: ${product.Description}`
    newData5.textContent = `Weight: ${product.Weight}`
    newImg.src = `../images/${product.Photo}`


    newImg.style.width = '400px';
    newImg.style.height = '400px';

    myArea.appendChild(newCard)
    newCard.appendChild(newData1)
    newCard.appendChild(newData2)
    newCard.appendChild(newData3)
    newCard.appendChild(newData4)
    newCard.appendChild(newData5)
    newCard.appendChild(newImg)        
};


getProducts('../json/product-apparel.json');





