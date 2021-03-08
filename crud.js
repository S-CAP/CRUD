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
                var result = JSON.parse(response);
               getData(result.userdata);
               
             }
        })
        
       
    }
    function getData(response){

        console.log(response);
        var data = "";
        $.each(response,function(index, value){
            data += "<tr>";
            data += "<td>"+(index+1)+"</td>";
            data += "<td>"+value.name+"</td>";
            data += "<td>"+value.phone+"</td>";
            data += "<td>"+value.email+"</td>";
            data += "<td data-attr="+value.id+"><button class='btn btn-primary btnEdit' id='edit' >Edit</button></td>";
            // console.log(value.id);
            data += "<td data-attr="+value.id+"><button class='btn btn-danger btnDel' id= 'delete' >Delete</button></td>";
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
                getUser();
                alert (response);
                $("#myModal").modal("hide");
                // after adding model shoud be blank so we use this were form is our form and triger is button which reset the model after adding the user
                $('form').trigger('reset');
            }
        });
        
    });


    // delete
    $("body").on("click",".btnDel",function(){
      var id =  $(this).parent("td").data("attr");

       $.ajax({
                url: "delete.php",
                method : "POST",
                data:{uid: id},
                success: function(response){
                    console.log(response);
                    getUser();

                $(this).parent("td").parent("tr").remove();
                
                

                
            }
       })

    })



    // edit
    $("body").on("click", ".btnEdit", function(){
        var id =  $(this).parent("td").data("attr");
        console.log('id');

    })
    
});

