import { CustomerModel} from '/model/CustomerModel.js'
import {customerData} from '/db/db.js'

var recodeIndex = undefined;
$('#cusSubmit').on('click',() =>{
   var cusId = $("#cusId").val();
   var cusName = $("#cusName").val();
   var cusTel = $("#cusTel").val();
   var cusAddress = $("#cusAddress").val();


   let customer = new CustomerModel(cusId,cusName,cusTel,cusAddress);

   customerData.push(customer);

   loadTable();

   $('#cusReset').click()

});


$('#cusDelete').on('click',() =>{

   customerData.splice(recodeIndex,1);

   loadTable();

   $('#cusReset').click();

});


$('#cusUpdate').on('click',() =>{

   var cusId = $("#cusId").val();
   var cusName = $("#cusName").val();
   var cusTel = $("#cusTel").val();
   var cusAddress = $("#cusAddress").val();

   var customer = customerData[recodeIndex];

   customer.id=cusId;
   customer.name=cusName;
   customer.tel=cusTel;
   customer.address=cusAddress;

   loadTable();

   $('#cusReset').click();

});




function loadTable(){

   $('#customer-table').empty();

   customerData.map(item =>{var recode = `<tr>
         <th scope="row" class="cus-id-value">${item.id}</th>
         <td class="cus-name-value">${item.name}</td>
         <td class="cus-tel-value">${item.tel}</td>
         <td class="cus-address-value">${item.address}</td>
      </tr>`

      $('#customer-table').append(recode);
   });

}


$('#customer-table').on('click', 'tr',function () {

   var index = $(this).index();

   recodeIndex = index;


   let  cusIdValue = $(this).find(".cus-id-value").text();
   let  cusNameValue = $(this).find(".cus-name-value").text();
   let  cusTelValue = $(this).find(".cus-tel-value").text();
   let  cusAddressValue = $(this).find(".cus-address-value").text();

   console.log(cusIdValue);

   $('#cusId').val(cusIdValue);
   $('#cusName').val(cusNameValue);
   $('#cusTel').val(cusTelValue);
   $('#cusAddress').val(cusAddressValue);

   console.log(1);

});

