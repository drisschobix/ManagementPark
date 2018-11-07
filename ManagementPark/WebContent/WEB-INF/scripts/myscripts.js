

//Véhicule
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
	
    document.getElementById("table-data").deleteRow(i);
}


function addRow() {
	var Marque=$( "#Marque" ).val();
	var Nbr_places=$( "#Nbr-place" ).val();
	var Services=$( "#Service" ).val();
	var Conducteur=$( "#Conducteur" ).val();
	var Situation=$( "#Situation" ).val();
	var id="2";
	var row="<tr id='"+id+"'>";
	row=row+"<td class='id-data'></td>";
	row=row+"<td>"+Marque+"</td>";
	row=row+"<td>"+Nbr_places+"</td>";
	row=row+ "<td>"+Services+"</td>";
	row=row+ "<td>"+Conducteur+"</td>";
	row=row+ "<td>"+Situation+"</td>";
	row=row+"<td>";
	row=row+"<span  class='glyphicon glyphicon-remove' onclick='deleteRow(this)'></span>";
	row=row+"<span data-toggle='modal' data-target='#myModaledit' class='glyphicon glyphicon-pencil'></span>";
    row=row+"</td>";
    row=row+"</tr>";    
         	
   $( "#table-data" ).append(row);
   
   $("#close-modal").click();
   $( "#Marque" ).val("");
   $( "#Nbr-place" ).val("");
   $( "#Service" ).val("");
   $( "#Conducteur" ).val("");
   $( "#Situation" ).val("");
}

function editRow(){
    var id_hidden=$("#hidden_id").val();
	var Marque=$( "#Marque-edit" ).val();
	var Nbr_places=$( "#Nbr-place-edit" ).val();
	var Services=$( "#Service-edit" ).val();
	var Conducteur=$( "#Conducteur-edit" ).val();
	var Situation=$( "#Situation-edit" ).val();
	
	var row="<tr id='"+id_hidden+"'>";
	row=row+"<td class='id-data'></td>";
	row=row+"<td>"+Marque+"</td>";
	row=row+"<td>"+Nbr_places+"</td>";
	row=row+ "<td>"+Services+"</td>";
	row=row+ "<td>"+Conducteur+"</td>";
	row=row+ "<td>"+Situation+"</td>";
	row=row+"<td>";
	row=row+"<span  class='glyphicon glyphicon-remove' onclick='deleteRow(this)'></span>";
	row=row+"<span data-toggle='modal' data-target='#myModaledit' class='glyphicon glyphicon-pencil'></span>";
    row=row+"</td>";
    row=row+"</tr>";   
	
	document.getElementById(id_hidden).innerHTML=row;
	
	$("#close-modal-edit").click();
	
	
}

$("#table-data").on('click','.glyphicon-pencil',function(){
	
   var r=$(this).closest("tr");
   var Marque=r.find('td:eq(1)').text();
	var Nbr_places=r.find('td:eq(2)').text();
	var Services=r.find('td:eq(3)').text();
	var Conducteur=r.find('td:eq(4)').text();
	var Situation=r.find('td:eq(5)').text();
	
   var id_hidden=r.get(0).id;
   
   $( "#Marque-edit" ).val(Marque);
   $( "#Nbr-place-edit" ).val(Nbr_places);
   $( "#Service-edit" ).val(Services);
   $( "#Conducteur-edit" ).val(Conducteur);
   $( "#Situation-edit" ).val(Situation);
   $("#hidden_id").val(id_hidden);
 
})

//Mission

function deleteRowMission(r) {
    var i = r.parentNode.parentNode.rowIndex;
	
    document.getElementById("table-data-mission").deleteRow(i);
}


function addRowMission() {
	var datedebut=$( "#datedebut" ).val();
	var datefin=$( "#datefin" ).val();
	var mission=$( "#mission" ).val();
	var villedepart=$( "#villedepart" ).val();
	var villearrivee=$( "#villearrivee" ).val();
	var conducteur=$( "#Conducteurmission" ).val();
	var montant=$( "#Montant" ).val();
	var id="10";
	var row="<tr id='"+id+"'>";
	row=row+"<td class='id-data'></td>";
	
	row=row+"<td>"+datedebut+"</td>";
	row=row+ "<td>"+datefin+"</td>";
	row=row+"<td>"+mission+"</td>";
	row=row+ "<td>"+villedepart+"</td>";
	row=row+ "<td>"+villearrivee+"</td>";
	row=row+ "<td>"+montant+"</td>";
	row=row+ "<td>"+conducteur+"</td>";
	row=row+"<td>";
	row=row+"<span  class='glyphicon glyphicon-remove' onclick='deleteRowMission(this)'></span>";
	row=row+"<span data-toggle='modal' data-target='#myModaleditMission' class='glyphicon glyphicon-pencil'></span>";
    row=row+"</td>";
    row=row+"</tr>";    
         	
   $( "#table-data-mission" ).append(row);
   
   $("#close-modal-mission").click();
  $( "#datedebut" ).val("");
  $( "#datefin" ).val("");
  $( "#mission" ).val("");
  $( "#villedepart" ).val("");
  $( "#villearrivee" ).val("");
  $( "#Conducteurmission" ).val("");
  $( "#Montant" ).val("");
}

function editRowMission(){
    var id_hidden=$("#hidden_id").val();
	var datedebut=$( "#datedebutedit" ).val();
	var datefin=$( "#datefinedit" ).val();
	var mission=$( "#missionedit" ).val();
	var villedepart=$( "#villedepartedit" ).val();
	var villearrivee=$( "#villearriveeedit" ).val();
	var conducteur=$( "#Conducteurmissionedit" ).val();
	var montant=$( "#Montantedit" ).val();
	
	var row="<tr id='"+id_hidden+"'>";
	row=row+"<td class='id-data'></td>";
	
	row=row+"<td>"+datedebut+"</td>";
	row=row+ "<td>"+datefin+"</td>";
	row=row+"<td>"+mission+"</td>";
	row=row+ "<td>"+villedepart+"</td>";
	row=row+ "<td>"+villearrivee+"</td>";
	row=row+ "<td>"+montant+"</td>";
	row=row+ "<td>"+conducteur+"</td>";
	row=row+"<td>";
	row=row+"<span  class='glyphicon glyphicon-remove' onclick='deleteRowMission(this)'></span>";
	row=row+"<span data-toggle='modal' data-target='#myModaleditMission' class='glyphicon glyphicon-pencil'></span>";
    row=row+"</td>";
    row=row+"</tr>";   
	
	document.getElementById(id_hidden).innerHTML=row;
	
	$("#close-modal-mission-mission").click();
	
	
}

$("#table-data-mission").on('click','.glyphicon-pencil',function(){

   var r=$(this).closest("tr");
    var datedebut=r.find('td:eq(1)').text();
	var datefin=r.find('td:eq(2)').text();
	var mission=r.find('td:eq(3)').text();
	var villedepart=r.find('td:eq(4)').text();
	var villearrivee=r.find('td:eq(5)').text();
	var conducteur=r.find('td:eq(7)').text();
	var montant=r.find('td:eq(6)').text();
	
   var id_hidden=r.get(0).id;
   
   $( "#datedebutedit" ).val(datedebut);
   $( "#datefinedit" ).val(datefin);
   $( "#missionedit" ).val(mission);
   $( "#villedepartedit" ).val(villedepart);
   $( "#villearriveeedit" ).val(villearrivee);
   $( "#Conducteurmissionedit" ).val(conducteur);
   $( "#Montantedit" ).val(montant);
   $("#hidden_id").val(id_hidden);
 
})

//réparation



function deleteRowReparation(r) {
    var i = r.parentNode.parentNode.rowIndex;
	
    document.getElementById("table-data-reparation").deleteRow(i);
}


function addRowReparation() {
	var datedebut=$( "#datedebutreparation" ).val();
	var datefin=$( "#datefinreparation" ).val();
	var vehicule=$( "#vehiculereparation" ).val();
	var montant=$( "#montantreparation" ).val();
	var id="20";
	var row="<tr id='"+id+"'>";
	row=row+"<td class='id-data'></td>";
	
	row=row+"<td>"+datedebut+"</td>";
	row=row+ "<td>"+datefin+"</td>";
	row=row+"<td>"+vehicule+"</td>";
	row=row+ "<td>"+montant+"</td>";
	row=row+"<td>";
	row=row+"<span  class='glyphicon glyphicon-remove' onclick='deleteRowReparation(this)'></span>";
	row=row+"<span data-toggle='modal' data-target='#myModaleditReparation' class='glyphicon glyphicon-pencil'></span>";
    row=row+"</td>";
    row=row+"</tr>";    
         	
   $( "#table-data-reparation" ).append(row);
   
   $("#close-modal-reparation").click();
  $( "#datedebutreparation" ).val("");
  $( "#datefinreparation" ).val("");
  $( "#vehiculereparation" ).val("");
  $( "#montantreparation" ).val("");
 
}

function editRowReparation(){
    var id_hidden=$("#hidden_id").val();
	var datedebut=$( "#datedebutreparationedit" ).val();
	var datefin=$( "#datefinreparationedit" ).val();
	var vehicule=$( "#vehiculereparationedit" ).val();
	var montant=$( "#montantreparationedit" ).val();
	
	
	var row="<tr id='"+id_hidden+"'>";
	row=row+"<td class='id-data'></td>";
	
	row=row+"<td>"+datedebut+"</td>";
	row=row+ "<td>"+datefin+"</td>";
	row=row+"<td>"+vehicule+"</td>";
	row=row+ "<td>"+montant+"</td>";
	row=row+"<td>";
	row=row+"<span  class='glyphicon glyphicon-remove' onclick='deleteRowReparation(this)'></span>";
	row=row+"<span data-toggle='modal' data-target='#myModaleditReparation' class='glyphicon glyphicon-pencil'></span>";
    row=row+"</td>";
    row=row+"</tr>";   
	
	document.getElementById(id_hidden).innerHTML=row;
	
	$("#close-modal-reparation-edit").click();
	
	
}

$("#table-data-reparation").on('click','.glyphicon-pencil',function(){

   var r=$(this).closest("tr");
    var datedebut=r.find('td:eq(1)').text();
	var datefin=r.find('td:eq(2)').text();
	var vehicule=r.find('td:eq(3)').text();
	var montant=r.find('td:eq(4)').text();
	
	
   var id_hidden=r.get(0).id;
   
   $( "#datedebutreparationedit" ).val(datedebut);
   $( "#datefinreparationedit" ).val(datefin);
   $( "#vehiculereparationedit" ).val(vehicule);
   $( "#montantreparationedit" ).val(montant);
   $("#hidden_id").val(id_hidden);
 
})


//Marque

function deleteRowMarque(r) {
    var i = r.parentNode.parentNode.rowIndex;
	
    document.getElementById("table-data-marque").deleteRow(i);
}


function addRowMarque() {
	var libelle=$( "#libellemarque" ).val();

	var id="30";
	var row="<tr id='"+id+"'>";
	row=row+"<td class='id-data'></td>";
	
	row=row+"<td>"+libelle+"</td>";
	row=row+"<td>";
	row=row+"<span  class='glyphicon glyphicon-remove' onclick='deleteRowMarque(this)'></span>";
	row=row+"<span data-toggle='modal' data-target='#myModaleditMarque' class='glyphicon glyphicon-pencil'></span>";
    row=row+"</td>";
    row=row+"</tr>";    
         	
   $( "#table-data-marque" ).append(row);
   
   $("#close-modal-marque").click();
  $( "#libellemarque" ).val("");
  
 
}

function editRowMarque(){
    var id_hidden=$("#hidden_id").val();
	var libelle=$( "#libellemarqueedit" ).val();
	
	
	
	var row="<tr id='"+id_hidden+"'>";
	row=row+"<td class='id-data'></td>";
	
	row=row+"<td>"+libelle+"</td>";
	row=row+"<td>";
	row=row+"<span  class='glyphicon glyphicon-remove' onclick='deleteRowMarque(this)'></span>";
	row=row+"<span data-toggle='modal' data-target='#myModaleditMarque' class='glyphicon glyphicon-pencil'></span>";
    row=row+"</td>";
    row=row+"</tr>";   
	
	document.getElementById(id_hidden).innerHTML=row;
	
	$("#close-modal-marque-edit").click();
	
	
}

$("#table-data-marque").on('click','.glyphicon-pencil',function(){

   var r=$(this).closest("tr");
    var libelle=r.find('td:eq(1)').text();
	
	
	
   var id_hidden=r.get(0).id;
   
   $( "#libellemarqueedit" ).val(libelle);
   $("#hidden_id").val(id_hidden);
 
})



//Utilisateur



function deleteRowUtilisateur(r) {
    var i = r.parentNode.parentNode.rowIndex;
	
    document.getElementById("table-data-utilisateur").deleteRow(i);
}


function addRowUtilisateur() {
	var nom=$( "#nomutilisateur" ).val();  
	var prenom=$( "#prenomutilisateur" ).val();
	var naissance=$( "#naisssanceutilisateur" ).val();
	var login=$( "#loginutilisateur" ).val();
	var motpass=$( "#passwordutilisateur" ).val();
	var fonctionnaire=$( "#fonctionnaireutilisateur" ).val();

	var id="40";
	var row="<tr id='"+id+"'>";
	row=row+"<td class='id-data'></td>";
	
	row=row+"<td>"+nom+"</td>";
	row=row+"<td>"+prenom+"</td>";
	row=row+"<td>"+naissance+"</td>";
	row=row+"<td>"+login+"</td>";
	row=row+"<td class='hidetext'>"+motpass+"</td>";
	row=row+"<td>"+fonctionnaire+"</td>";
	row=row+"<td>";
	row=row+"<span  class='glyphicon glyphicon-remove' onclick='deleteRowUtilisateur(this)'></span>";
	row=row+"<span data-toggle='modal' data-target='#myModalUtilisateuredit' class='glyphicon glyphicon-pencil'></span>";
    row=row+"</td>";
    row=row+"</tr>";    
         	
   $( "#table-data-utilisateur" ).append(row);
   
   $("#close-modal-utilisateur").click();
    $( "#nomutilisateur" ).val("");
	$( "#prenomutilisateur" ).val("");
	$( "#naisssanceutilisateur" ).val("");
	$( "#loginutilisateur" ).val("");
	$( "#passwordutilisateur" ).val("");
	$( "#fonctionnaireutilisateur" ).val("");

 
  
 
}

function editRowUtilisateur(){
    var id_hidden=$("#hidden_id").val();
	var nom=$( "#nomutilisateuredit" ).val();
	var prenom=$( "#prenomutilisateuredit" ).val();
	var naissance=$( "#naisssanceutilisateuredit" ).val();
	var login=$( "#loginutilisateuredit" ).val();
	var motpass=$( "#passwordutilisateuredit" ).val();
	var fonctionnaire=$( "#fonctionnaireutilisateuredit" ).val();
	
	
	
	var row="<tr id='"+id_hidden+"'>";
	row=row+"<td class='id-data'></td>";
	
	row=row+"<td>"+nom+"</td>";
	row=row+"<td>"+prenom+"</td>";
	row=row+"<td>"+naissance+"</td>";
	row=row+"<td>"+login+"</td>";
	row=row+"<td class='hidetext'>"+motpass+"</td>";
	row=row+"<td>"+fonctionnaire+"</td>";
	row=row+"<td>";
	row=row+"<span  class='glyphicon glyphicon-remove' onclick='deleteRowUtilisateur(this)'></span>";
	row=row+"<span data-toggle='modal' data-target='#myModalUtilisateuredit' class='glyphicon glyphicon-pencil'></span>";
    row=row+"</td>";
    row=row+"</tr>";   
	
	document.getElementById(id_hidden).innerHTML=row;
	
	$("#close-modal-utilisateur-edit").click();
	
	
}

$("#table-data-utilisateur").on('click','.glyphicon-pencil',function(){

   var r=$(this).closest("tr");
    
	var nom=r.find('td:eq(1)').text();
	var prenom=r.find('td:eq(2)').text();
	var naissance=r.find('td:eq(3)').text();
	var login=r.find('td:eq(4)').text();
	var motpass=r.find('td:eq(5)').text();
	var fonctionnaire=r.find('td:eq(6)').text();
	
	
   var id_hidden=r.get(0).id;
    
  $( "#nomutilisateuredit" ).val(nom);
  $( "#prenomutilisateuredit" ).val(prenom);
  $( "#naisssanceutilisateuredit" ).val(naissance);
  $( "#loginutilisateuredit" ).val(login);
  $( "#passwordutilisateuredit" ).val(motpass);
  $( "#fonctionnaireutilisateuredit" ).val(fonctionnaire);
   
   $("#hidden_id").val(id_hidden);
 
})


