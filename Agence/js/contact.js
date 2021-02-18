function get_contact(){

    // To set name
    var myname = document.getElementById("fname").value;
    var myemail = document.getElementById("eemail").value;
    var mysujet = document.getElementById("ssujet").value;
    var mymessage = document.getElementById("message").value;

    document.getElementById("ModalContact").innerHTML = "<p style='margin-top:10px'>Name : "+ myname+ "</p>"+"<p style='margin-top:10px'>Email: "+myemail+"</p>"+"<p style='margin-top:10px'>Sujet : "+ mysujet + "</p>"+"<p style='margin-top:10px'>Message : "+mymessage+"<br></p>"+"<p style='color:green;text-align:center;margin-top:10px;font-size:25px' >Merci, votre message a été envoyé avec succès</p>";
    


    //  To display name

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