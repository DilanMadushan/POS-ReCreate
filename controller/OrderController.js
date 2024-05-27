import {orderModel} from '/model/orderModel.js'
import {orderData, itemData, customerData} from '/db/db.js'

$('#reset').css({display:'none'});

let total = 0;

let loop = 0;


validation();

$('#orderAdd').on('click',()=>{

    var orderId = $('#orderId').val();
    var customerId = $('#cusId').val();
    var itemId = $('#orderItem_id').val();
    var qty =$('#orderQty').val();

    console.log(id);

    let index = itemData.findIndex(item => item.id === itemId);
    console.log(index);

    var item = itemData[index];

    // check Quantity is enough

    if(qty>item.qty){
        alert("over the Quantity");
        return;
    }

    let order = new orderModel(orderId,customerId,item.id,item.name,item.price,qty,item.desc);

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


function validation(){

    $('#orderItem_id').on('propertychange input', function (e) {


        var iID = $('#orderItem_id').val();

        let index = itemData.findIndex(item => item.id === iID);
        console.log(index);

        if(index === -1){
            $('#orderItem_id').css("border","2px solid red");
        }else {
            $('#orderItem_id').css("border","2px solid #92F646");
        }

    });

    $('#customerId').on('propertychange input', function (e) {

        var cId = $('#customerId').val();

        let index = customerData.findIndex(item => item.id === cId);
        console.log(index);

        if(index === -1){
            $('#customerId').css("border","2px solid red");
        }else {
            $('#customerId').css("border","2px solid #92F646");
        }

    });

}


