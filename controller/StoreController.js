import {StoreModel} from '/model/StoreModel.js'
import {itemData} from '/db/db.js'

var recodeIndex;

$('#proSubmit').on('click',() =>{

    var proId = $('#proId').val();
    var proName = $('#proName').val();
    var proQty = $('#proQty').val();
    var proDesc = $('#proDesc').val();
    var proPrice = $('#proPrice').val();

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