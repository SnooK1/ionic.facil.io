const productoname = document.querySelector('#productoname');
const productoprice = document.querySelector('#productoprice');
const btnguardar = document.querySelector('#btn-guardar');
const btnclear = document.querySelector('#btn-clear');
const productlist = document.querySelector('#product-list');

const createnewproducto = (name, price) => {
    const ioncart = document.createElement('ion-card');
    const ioncontent = document.createElement('ion-card-conten');
    ioncontent.textContent = name +': $' +price;
    ioncart.appendChild(ioncontent);
    productlist.appendChild(ioncart);
}
const clearinut =  () => {
    productoname.value = "";
    productoprice.value ="";
}
const viewalerta = () => {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'Alert';
    alert.subHeader = 'Subtitle';
    alert.message = 'This is an alert message.';
    alert.buttons = ['OK']; 
    document.body.appendChild(alert);
    return alert.present();
}
btnguardar.addEventListener('click', (e)=>{
    e.preventDefault();
    if(productoname.value == ""||productoprice.value == ""){
        viewalerta();
    }else{ 
        const name = productoname.value;
        const precio = productoprice.value;
        createnewproducto(name,precio);
        clearinut();
    }

})
btnclear.addEventListener('click',clearinut);