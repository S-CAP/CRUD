$(document).ready(function () {
  
    // getuser
    getUser();

    function getUser()
    {
        $.ajax(
            {
            url:"get_user.php",
            method:'POST',
            datatype:"json",
            success: function(response) { 
               
               
               getData(response.userdata);
              
              

             }
        })
        
       
    }
    function getData(response){
        var data = "";
        $.each(response,function(index, value){
            data += "<tr>";
            data += "<td>"+$value.id+"</td>";
            data += "<td>"+$value.name+"</td>";
            data += "<td>"+$value.phone+"</td>";
            data += "<td>"+$value.email+"</td>";
            data +="</tr>";
        });
        $("tbody").html(data);
        
    }

  


    // adduser
    $("#addbutton").click(function() { 
        $.ajax({ 
            url: "adduser.php",
            method: "POST",
            data: $("#frm").serialize(),
            success: function (response) {
                
                alert (response);
                $("#myModal").modal("hide");
            }
        });
        
    });
    
});