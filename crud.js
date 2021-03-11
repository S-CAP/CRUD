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
    

      var r = confirm("Are you sure you want to delete this record");
       if (r == true) {
               $.ajax({
                url: "delete.php",
                method : "POST",
                data:{uid: id},
                success: function(response){
                   
                    getUser();

                $(this).parent("td").parent("tr").remove();
                
              
            }
          });

      } 
    

    });

    // edit
    $("body").on("click",".btnEdit", function(){
        var id =$(this).parent("td").data("attr");
        var name = $(this).parent("td").prev("td").prev("td").prev("td").text(); 
        var eid = $(this).parent("td").prev("td").text();   
        var phone = $(this).parent("td").prev("td").prev("td").text();    
      
        $("#vid").val(id);
        $("#Name").val(name);
        $("#phone").val(phone);    
        $("#emailid").val(eid);  
        
        $("#Modal").modal("show");
       
    });

    $("#editbutton").click(function(){
        $.ajax({
            url: "edit.php",
            method: "POST",
            data: $("#myfrm").serialize(),
            success: function(response){
                getUser();
                $("#Modal").modal("hide");
                $('form').trigger('reset');

                
            }
        })
    })

    
});

