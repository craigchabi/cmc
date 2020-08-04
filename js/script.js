var price , crustprice , toppingprice ;
let total = 0;
function getPizza(flavor, size, crust, topping, total){
   this.flavor = flavor;
   this.size = size;
   this.crust = crust;
   this.topping = topping;
   this.total = total;   
}

$(document).ready(function(){
   
   $("button.proceed").click(function(event){
      let pflavor = $("#pflavor option:selected").val();
      let psize = $("#psize option:selected").val();
      let pcrust = $("#pcrust option:selected").val();
      let ptop = $("#ptop option:selected").val();
   });
   switch(psize){
      case "small":
         price = 600;
         console.log(price);
        break;
        case "medium":
          price = 800;
          console.log(price);
        break;
        case "large":
           price = 1000;
           console.log(price);
        default:
           console.log("error");
   }
   switch(pcrust){
      case "thin":
         crustprice = 150;
      break;
      case "stuffed":
         crustprice = 200;
      break
      case "crispy":
         crustprice = 200;
      break;
      default:
         console.log("No Price");
   }
   switch(ptop){
      case "sausage":
         toppingprice = "50";
      break;
      case "bac":
         toppingprice = "50";
      break;
      case "pins":
         toppingprice = "50";
      break;
      case "veg":
         toppingprice = "50";
      break;
      default:
         console.log("Please select topping")
   }

   if((psize == "0") && (pcrust == "0")){
      console.log("Nothing selected");
      $("button.proceed").show();
      $("#info").show();
      $(".delivery").hide();
      $(".deli-details").hide();
      alert("Please select pizza size and crust");
   }
   
   total = price + crustprice + toppingprice;
   console.log(total);
   let checkoutTotal =0;
   checkoutTotal = checkoutTotal + total;

   $("button.proceed").click(function(){
      $("button.proceed").hide();
      $("#info").hide();
      console.log("Your totalbill is sh. " +checkoutTotal);
      $(".delivery").show();
   });
   
   $("button.deliver").click(function(){
      $(".delivery").hide();
      $(".deli-details").show();
      let finalamount = checkoutTotal + 150;
      console.log("You will pay sh. " + finalamount + "on delivery.");
   });

   $("button#finorder").click(function(event){
      event.preventDefault();

      $(".deli-details").hide();
      $("button#finorder").hide();
      let finalamount = checkoutTotal + 150;
      console.log("Final Charge is:" + finalamount);
      let person = $("input#name").val();
      let number = $("input#number").val();
      let location = $("input#location").val();

      if ($("input#name").val() && $("input#phone").val() && $("input#location").val()){

         $("#finalmessage").append(person + ", We have received you order and it will be delivered to your"+location+". You will pay sh."+finalamount+"on delivery.");
         $("#finalmessage").slideDown(1000);
      }
      else{
         alert("Please fill in the details for delivery!")
         $(".deliver").show();
         $("button#finorder").show();
      }

      event.preventDefault();
   });
});
