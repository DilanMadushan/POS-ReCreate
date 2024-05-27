import {orderModel} from '/model/orderModel.js'
import {orderData, itemData, customerData} from '/db/db.js'

$('#reset').css({display:'none'});

let total = 0;

let loop = 0;


$('#orderAdd').on('click',()=>{


    var id = $('#orderItem_id').val();
    var qty =$('#orderQty').val();


    console.log(id);

    let index = itemData.findIndex(item => item.id === id);
    console.log(index);

    var item = itemData[index];

    // check Quantity is enough

    if(qty>item.qty){
        alert("over the Quantity");
        return;
    }



    let order = new orderModel(item.id,item.name,item.price,qty,item.desc);

    orderData.push(order);

    loadTable();

    $('#reset').click();

    calculate();

    $('#total').text("Total :"+total+".00");

});


function calculate(){
    total+=orderData[loop].price*orderData[loop].qty;
    loop++;
}

function loadTable(){

    $('#order-table').empty();

    orderData.map(item =>{var recode = `<tr >
                        <th>${item.id}</th>
                        <td>${item.name}</td>
                        <td>${item.price}</td>
                        <td>${item.qty}</td>
                        <td>${item.desc}</td>
                    </tr>`

        $('#order-table').append(recode)

    });

}

$('#payAction').on('click' ,()=>{

   var payment = $('#payment').val();

    var balance = payment-total;

    $('#balance').text("Balance : "+balance+".00");

});

$('#orderItem_id').on('propertychange input', function (e) {

    $('#orderItem_id').css("border","2px solid purple");

    var iID = $('#orderItem_id').val();

    let index = itemData.findIndex(item => item.id === iID);
    console.log(index);

    if(index === -1){
        $('#orderItem_id').css("border","2px solid red");
    }else {
        $('#orderItem_id').css("border","2px solid green");
    }

});

