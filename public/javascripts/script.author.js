$(document).ready(function(){
    
    // checkbox author config..
    $('#terms').click(function(){
        if($(this).is(":checked")){
            $(this).val("Yes");
        }else{
            $(this).val("No"); 
        }  
    });

    // intl auther config ...
    // intl init...
    let mobileNumber = $('#mobileNumber');
    // intl india default country and format config ..
    mobileNumber.intlTelInput({
        preferredCountries:["in"],
        nationalMode:true,
        utilsScript:"/javascripts/00_lib/02_intl/utils.js"
    });

    mobileNumber.on("keyup change" , function(){
        let numWithCountryCode = mobileNumber.intlTelInput("getNumber");
        if(numWithCountryCode){
            return $(this).val(numWithCountryCode);
        }
    });

    $('#confirmPassword').on('keyup change' , function(){
        if($(this).val() === $('#password').val()) alert("ok password matched !")
    });

    	//    $.notify({
        //     	icon: 'ti-gift',
        //     	message: "Welcome to Fly Tourist Global Service Pvt Ltd and enjoy your booking .."

        //     },{
        //         type: 'success',
        //         timer: 4000
        //     });

});