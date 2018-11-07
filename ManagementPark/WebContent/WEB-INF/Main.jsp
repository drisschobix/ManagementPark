<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<%@ taglib uri='http://java.sun.com/jsp/jstl/core' prefix='c'%>
<!DOCTYPE html>
<html>
<head>
  <title></title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <meta charset="ISO-8859-1">
    
<script type="text/javascript">
function deleteRow(r,id) {
    var i = r.parentNode.parentNode.rowIndex;
  
    document.getElementById("table-data").deleteRow(i);
    $.ajax({
        url: "/ManagementPark/DeleteVehicle/"+id,
        type: "post",
        success: function(d) {
            alert(d);
        }
    });
    
}

</script>
 <link rel="stylesheet" type="text/css" href="WEB-INF/css/mystyle.css">
 <link rel="stylesheet" href="<spring:url value="/css/mystyle.css"/>" >
 
 <style type="text/css">
 .MyForm
{
margin-top: 35;
	
}

    

.glyphicon-remove 
{
cursor: pointer;
margin-right: 10px;
	
}

.glyphicon-pencil
{
cursor: pointer;
margin-right: 10px;
	
}

.ajouter_button
{
margin-top: 20px;	
	
}

.id-data
{
    display: none;
}

.hidetext { 
-webkit-text-security: disc; /* Default */ 

}

.login-form {
		width: 340px;
    	margin: 50px auto;
	}
    .login-form form {
    	margin-bottom: 15px;
        background: #f7f7f7;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        padding: 30px;
    }
    .login-form h2 {
        margin: 0 0 15px;
    }
    .form-control, .btn {
        min-height: 38px;
        border-radius: 2px;
    }
    .btn {        
        font-size: 15px;
        font-weight: bold;
    }
 </style>
</head>
<body>

<div class="container">
  <h2>Gestion Parc Véhicule</h2>
  <ul class="nav nav-tabs">
    <li class="active"><a data-toggle="tab" href="#home">Véhicules</a></li>
   
  </ul>

  <div class="tab-content">
    <div id="home" class="tab-pane fade in active">
	

	<a href="/ManagementPark/AddVehicle"><button type="button" class="btn btn-primary ajouter_button ">Ajouter</button></a>
	
      <table class="table table-hover" id="table-data">
    <thead>
      <tr>
	  
        <th>Matricule</th>
        <th>Nombre places</th>
        <th>Poid</th>
		<th>Opération</th>
      </tr>
	  
    </thead>
    <tbody>
	 <c:forEach items="${Vehicles}" var="Vehicles">     
   
  
      <tr id="${Vehicles.getID_Vehicle()}">
	    <td class="id-data"><c:out value="${Vehicles.getID_Vehicle()}"/></td>
        <td> <c:out value="${Vehicles.getRgNb_Vehicle()}"/></td>
        <td> <c:out value="${Vehicles.getNbSeats_Vehicle()}"/></td>
        <td> <c:out value="${Vehicles.getWeight_Vehicle()}"/></td>
		
		<td ><span  class="glyphicon glyphicon-remove" onclick="deleteRow(this,${Vehicles.getID_Vehicle()})"></span><a href="/ManagementPark/EditVehicle/${Vehicles.getID_Vehicle()}"><span  data-toggle="modal" data-target="#myModaledit" class="glyphicon glyphicon-pencil"></span></a></td>
      </tr>
      </c:forEach>
	  
    
    </tbody>
  </table>
    </div>
    
	
	
	
   
	
  </div>
</div>


   <!-- Id TR-->
   <input type="hidden" id="hidden_id" name="hidden-id" value="">	
   <script src="scripts/myscripts.js"></script>  
  
 

</body>
</html>