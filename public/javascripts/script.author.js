$(document).ready(function(){
    $('#terms').click(function(){
        if($(this).is(":checked")){
            $(this).val("Yes");
        }else{
            $(this).val("No"); 
        }  
    });

});