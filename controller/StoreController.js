import {StoreModel} from '/model/StoreModel.js'
import {itemData} from '/db/db.js'

var recodeIndex;


validation();
$('#proSubmit').on('click',() =>{

    var proId = $('#proId').val();
    var proName = $('#proName').val();
    var proQty = $('#proQty').val();
    var proDesc = $('#proDesc').val();
    var proPrice = $('#proPrice').val();

    console.log(validation());

    if (!validation()) {
        alert("Fill the details Properly");
        return;
    }

    let store = new StoreModel(proId,proName,proPrice,proQty,proDesc);

    itemData.push(store);

    loadTable();

    $('#proReset').click();

});

function loadTable(){

    $('#pro-table').empty();

    itemData.map(item =>{var recode = `<tr >
                        <th scope="row" class="pro-id-value">${item.id}</th>
                        <td class="pro-name-value">${item.name}</td>
                        <td class="pro-price-value">${item.price}</td>
                        <td class="pro-qty-value">${item.qty}</td>
                        <td class="pro-desc-value" >${item.desc}</td>
                    </tr>`

        $('#pro-table').append(recode)

    });

}

$('#pro-table').on('click', 'tr',function () {

    var index = $(this).index();

    recodeIndex = index;


    let  storeId = $(this).find(".pro-id-value").text();
    let  storeName = $(this).find(".pro-name-value").text();
    let  storePrice = $(this).find(".pro-price-value").text();
    let  storeQty = $(this).find(".pro-qty-value").text();
    let  storeDesc = $(this).find(".pro-desc-value").text();



    $('#proId').val(storeId);
    $('#proName').val(storeName);
    $('#proQty').val(storeQty);
    $('#proDesc').val(storeDesc);
    $('#proPrice').val(storePrice);

});

$('#proUpdate').on('click',() =>{

    var proId = $('#proId').val();
    var proName = $('#proName').val();
    var proQty = $('#proQty').val();
    var proDesc = $('#proDesc').val();
    var proPrice = $('#proPrice').val();

    let store = itemData[recodeIndex];

    store.id=proId;
    store.name=proName;
    store.qty=proQty;
    store.price=proPrice;
    store.desc=proDesc;

    loadTable();

    $('#proReset').click();

});

$('#proDelete').on('click',() =>{

    itemData.splice(recodeIndex,1);

    loadTable();

    $('#proReset').click();
});


function validation(){

    //trigger key was pressed

    $('#proId').on('propertychange input', function (e) {

        var proId = $('#proId').val();

        if(!proId.match("[I]\\d{3,}")){
            $('#proId').css("border","2px solid red");
        }else{
            $('#proId').css("border","2px solid #92F646");
        }

    });

    $('#proName').on('propertychange input', function (e) {

        var proName = $('#proName').val();

        if(!proName.match( "^[A-Z][a-zA-Z]{2,}$")){
            $('#proName').css("border","2px solid red");
        }else{
            $('#proName').css({"border":"2px solid #92F646"});
        }

    });

    $('#proPrice').on('propertychange input', function (e) {

        var proPrice = $('#proPrice').val();


        if(!proPrice.match("^\\d+$")){
            $('#proPrice').css("border","2px solid red");
        }else{
            $('#proPrice').css("border","2px solid #92F646");
        }

    });

    $('#proQty').on('propertychange input', function (e) {

        var proQty = $('#proQty').val();

        if(!proQty.match( "^\\d+$")){
            $('#proQty').css("border","2px solid red");
        }else{
            $('#proQty').css("border","2px solid #92F646");
        }

    });

    $('#proDesc').on('propertychange input', function (e) {

        var proDesc = $('#proDesc').val();


        if(!proDesc.match("^[A-Z][a-zA-Z]{4,}$")){
            $('#proDesc').css("border","2px solid red");
        }else{
            $('#proDesc').css("border","2px solid #92F646");
        }

    });

    var proId = $('#proId').val();
    var proName = $('#proName').val();
    var proQty = $('#proQty').val();
    var proDesc = $('#proDesc').val();
    var proPrice = $('#proPrice').val();

    if(proId.length === 0 || proName.length === 0  || proQty.length === 0 || proDesc.length === 0 || proPrice.length === 0){
        return false;
    }else {
        return true
    }

}

$('#proId').keypress(function (e){
    var key = e.which;

    if(key===13){
        $('#proName').focus();
    }

});

$('#proName').keypress(function (e){
    var key = e.which;

    if(key===13){
        $('#proPrice').focus();
    }

});

$('#proPrice').keypress(function (e){
    var key = e.which;

    if(key===13){
        $('#proQty').focus();
    }

});

$('#proQty').keypress(function (e){
    var key = e.which;

    if(key===13){
        $('#proDesc').focus();
    }

});

$('#proDesc').keypress(function (e){
    var key = e.which;

    if(key===13){
        $('#proSubmit').click();
    }

});
