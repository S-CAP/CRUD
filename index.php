<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>crud</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
</head>

<body>


    <div class="container mt-5 ">

        <div class=" alert alert-info text-center mb-5">
            <h2>CRUD OPERATION</h2>
        </div>
        <button type="button" class="btn btn-info btn-lg mb-2" data-toggle="modal" data-target="#myModal">ADD USER</button>


        <div id="myModal" class="modal fade" role="dialog">
            <div class="modal-dialog">


                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title  ">New User</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>

                    </div>
                    <div class="modal-body">
                        <form method="POST" id="frm" autocomplete="off">

                            <div class="form-group">
                                <label for="name">Enter Name</label>
                                <input type="text" name="name" id="name" class="form-control" placeholder="Enter name" autocomplete="false">
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" name="emailid" id="email" class="form-control" placeholder="Enter email" autocomplete="false">
                            </div>

                            <div class=" form-group">
                                <label for="name">Password</label>
                                <input type="password" name="password" id="pass" class="form-control" placeholder="Enter password" autocomplete="false">
                            </div>
                            <div class=" form-group">
                                <label for="number">Phone</label>
                                <input type="number" name="phone" id="number" class="form-control" placeholder="phone" autocomplete="false">
                            </div>

                            <div class=" form-group">

                                <button type="button" id="addbutton" class="btn btn-primary">Add user</button>
                            </div>

                        </form>
                    </div>
                    <div class=" modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                </div>

            </div>
        </div>

        <!-- table -->

        <table class="table table-borderd">
            <thead>
                <tr>
                    <th scope="col">S.NO</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody id="data">

            </tbody>
        </table>

    </div>


    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="crud.js"></script>
</body>

</html>