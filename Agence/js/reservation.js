// var vehicule =  ["moto","compact","citadin","utilitaire","engin_de_chantier","berlin","camion"];
// var carburant =  ["essence","diesel","electrique","hybride"];
// var boite = ["manuelle","automatique"]
var prc_carburant;
var prc_boite;
var prix_tarif;
var prix_global;


// change a selections options based on another select option selected
function _vehicule(){
    var veh_type = document.getElementById("vehicule").value;
    switch(veh_type) {

        case "moto":
            document.getElementById("carburant").innerHTML = "<option value=''>--select one--</option><option value='essence'>Essence</option><option value='electrique'>Electrique</option>";
            document.getElementById("boite").innerHTML ="<option value=''>none</option>";
            prix_tarif=10;
            prc_boite=0;
            break;
        case "compact":
            document.getElementById("carburant").innerHTML = "<option value=''>--select one--</option><option value='essence'>Essence</option><option value='diesel'>Diesel</option><option value='hybride'>Hybride</option>";
            document.getElementById("boite").innerHTML ="<option value=''>--select one--</option><option value='manuelle'>manuelle</option>";
            prix_tarif=14;
            prc_boite=0;
            break;
            case "citadin":
            document.getElementById("carburant").innerHTML = "<option value=''>--select one--</option><option value='essence'>Essence</option><option value='diesel'>Diesel</option><option value='electrique'>Electrique</option><option value='hybride'>Hybride</option>";
            document.getElementById("boite").innerHTML ="<option value=''>--select one--</option><option value='manuelle'>manuelle</option>";
            prix_tarif=12;
            prc_boite=0;
            break;
        case "utilitaire":
            document.getElementById("carburant").innerHTML = "<option value=''>--select one--</option><option value='diesel'>Diesel</option>";
            document.getElementById("boite").innerHTML ="<option value=''>--select one--</option><option value='manuelle'>manuelle</option>";
            prix_tarif=16;
            prc_boite=0;
            break;
        case "engin_de_chantier":
            document.getElementById("carburant").innerHTML = "<option value=''>--select one--</option><option value='essence'>Essence</option><option value='diesel'>Diesel</option>";
            document.getElementById("boite").innerHTML ="<option value=''>--select one--</option><option value='manuelle'>manuelle</option>";
            prix_tarif=900;
            prc_boite=0;
            break;
        case "berlin":
            document.getElementById("carburant").innerHTML = "<option value=''>--select one--</option><option value='essence'>Essence</option><option value='diesel'>Diesel</option><option value='hybride'>Hybride</option>";
            document.getElementById("boite").innerHTML ="<option value=''>--select one--</option><option value='automatique'>automatique</option>";
            prix_tarif=20;
            prc_boite=0.19;
            break;
        case "camion":
            document.getElementById("carburant").innerHTML =  "<option value=''>--select one--</option><option value='diesel'>Diesel</option>";
            document.getElementById("boite").innerHTML ="<option value=''>--select one--</option><option value='automatique'>automatique</option>";
            prix_tarif=250;
            prc_boite=0.19;
            break;
        default:
    }
}


function _carburant(){
    var carburant_type = document.getElementById("carburant").value;
    switch(carburant_type) {
        case "essence":
            prc_carburant = 0.14;
            break;
        case "diesel":
            prc_carburant = 0.21;
            break;
            case "electrique":
            prc_carburant = 0.05;
            break;
        case "hybride":
            prc_carburant = 0.09;
            break;
        default:
    }
}




function cacul_prix(){

    // To set two dates to two variables
    var startdate = new Date(document.getElementById("start").value);
    var enddate = new Date(document.getElementById("end").value);
    
    // hours*minutes*seconds*milliseconds
    const oneDay = 24 * 60 * 60 * 1000;
    
    // To calculate the time difference of two dates 
    var Difference_In_Time  = startdate - enddate;
        
    // To calculate the no. of days between two dates 
    var diffDays = Math.round(Math.abs((Difference_In_Time) / oneDay));
 
    prix_global = diffDays*(prix_tarif + (prix_tarif*(prc_boite + prc_carburant)));

     //To display the final Price (result)
     document.getElementById("res_modal").innerHTML = "<p style='margin-top:10px;text-align:center'>Prix Global : "+prix_global+"<br></p>"+"<p style='color:green;text-align:center;margin-top:10px;font-size:25px' >successfully submitted</p>";
}


let modal = document.querySelector(".modal");
let show = document.querySelector(".show");
let closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

show.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);


// print pdf
var doc = new jsPDF();          
var elementHandler = {
  '#ignorePDF': function (element, renderer) {
    return true;
  }
};
var source = window.document.getElementsByTagName("body")[0];
doc.fromHTML(
    source,
    15,
    15,
    {
      'width': 180,'elementHandlers': elementHandler
    });

doc.output("dataurlnewwindow");