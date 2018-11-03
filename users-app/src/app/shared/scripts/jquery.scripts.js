$(document).ready(function(){

    
    showAlertMessage= () => {

        $('#message').fadeIn(3000).fadeOut(3000);
    }


    openModalDialogInvalid = ()=> {
        $.alert({
         title: 'Invalid Id',
        content: 'Sorry! This is invalid Id'
    });

    }


 })