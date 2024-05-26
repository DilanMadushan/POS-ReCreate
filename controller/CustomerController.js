import { CustomerModel} from '/model/CustomerModel.js'
import {customerData} from '/db/db.js'

var recodeIndex = undefined;

validation();
$('#cusSubmit').on('click',() =>{

   if (!validation()) {
      alert("Fill the details Properly");
      return;
   }

   var cusId = $("#cusId").val();
   var cusName = $("#cusName").val();
   var cusTel = $("#cusTel").val();
   var cusAddress = $("#cusAddress").val();



   let customer = new CustomerModel(cusId,cusName,cusTel,cusAddress);

   customerData.push(customer);

   loadTable();

   $('#cusReset').click()

   $(':input').css("border","2px solid 494949")


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

function validation(){

   //trigger key was pressed

   $('#cusId').on('propertychange input', function (e) {

      var cusId = $("#cusId").val();

      if(!cusId.match("[C]\\d{3,}")){
         $('#cusId').css("border","2px solid red");
      }else{
         $('#cusId').css("border","2px solid #92F646");
      }

   });

   $('#cusName').on('propertychange input', function (e) {

      var cusName = $("#cusName").val();

      if(!cusName.match( "^[A-Z][a-zA-Z]{2,}$")){
         $('#cusName').css("border","2px solid red");
      }else{
         $('#cusName').css({"border":"2px solid #92F646"});
      }

   });

   $('#cusTel').on('propertychange input', function (e) {

      var cusTel = $("#cusTel").val();

      if(!cusTel.match( "^([+]94{1,3}|[0])([1-9]{2})([0-9]){7}$")){
         $('#cusTel').css("border","2px solid red");
      }else{
         $('#cusTel').css("border","2px solid #92F646");
      }

   });

   $('#cusAddress').on('propertychange input', function (e) {

      var cusAddress = $("#cusAddress").val();


      if(!cusAddress.match("^[A-Z][a-zA-Z]{2,}$")){
         $('#cusAddress').css("border","2px solid red");
      }else{
         $('#cusAddress').css("border","2px solid #92F646");
      }

   });

   return true;



}

$('#cusId').keypress(function (e){
   var key = e.which;

   if(key===13){
      $('#cusName').focus();
   }

});

$('#cusName').keypress(function (e){
   var key = e.which;
   console.log(key);

   if(key===13){
      $('#cusTel').focus();
   }

});

$('#cusTel').keypress(function (e){
   var key = e.which;
   console.log(key);

   if(key===13){
      $('#cusAddress').focus();
   }

});

$('#cusAddress').keypress(function (e){
   var key = e.which;
   console.log(key);

   if(key===13){
      $('#cusSubmit').click();
   }

});






