<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
  <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>



<head>
  <title>Ajouter Véhicules</title>
 
  <meta charset="ISO-8859-1">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>    
 
 <link rel="stylesheet" type="text/css" href="WEB-INF/resources/css/mystyle.css">
 
 
<style type="text/css">
.err{
float:left;
}
.showerr{
display:grid;
}
</style>
</head>
<body>

<div class="container">
  <h2>Gestion Parc Véhicule</h2>
  <ul class="nav nav-tabs">
    <li class="active"><a data-toggle="tab" href="#home">Ajouter Véhicules</a></li>
  </ul>

<div class="row">
    <div class="col-sm-8">
  <div class="tab-content">
    <div id="home" class="tab-pane fade in active">
    
	<br><br>
   <form class="Myform" action="/ManagementPark/AddVehicleSubmition"  method="post"  >

  

  <div class="form-group">
<label for="Nbr-places">Nbr places:</label>
<div class="showerr">
  <input type="number" class="form-control" id="Nbr-place" name="NbSeats_Vehicle" value="${vehicle.getNbSeats_Vehicle()}">
   <form:errors class="err alert alert-danger" path="vehicle.NbSeats_Vehicle"/> 
 </div>
  </div>
  
 
   <div class="form-group">
<label for="RgNb_Vehicle">Matricule:</label>
<div class="showerr">
  <input type="text" class="form-control" id="RgNb_Vehicle" name="RgNb_Vehicle" value="${vehicle.getRgNb_Vehicle()}"/>
    <form:errors class="err alert alert-danger" path="vehicle.NbSeats_Vehicle"/> 
 </div>
  </div>
     
      <div class="form-group">
<label for="Weight_Vehicle">Poids:</label>
<div class="showerr">
  <input type="number" class="form-control" id="Weight_Vehicle" name="Weight_Vehicle" value="${Vehicle.getWeight_Vehicle()}">
   <form:errors class="err alert alert-danger" path="vehicle.Weight_Vehicle"/> 
 </div>
  </div>
      
	<button type="submit" class="btn btn-primary ">Submit</button>
   </form>
    </div>
  
  
    </div>
  </div>
    </div>
  
  </div>
  



</body>
</html>

</html>