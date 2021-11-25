window.onload = init;

function init(){
    if(localStorage.getItem("token")){
    document.querySelector('.btn-secondary').addEventListener('click', function(){
        window.location.href = "Interfaz.html"
    });


document.querySelector('.btn-primary').addEventListener('click', signin)
    }
    else{
        window.location.href = "Interfaz.html";
      }
    
}

function signin (){

    var name = document.getElementById('input-name').value;
    var mail = document.getElementById('input-mail').value;
    var pass = document.getElementById('input-password').value;

    axios({
        method: 'post',
        url: 'https://recursoshumanosdanielibarra.herokuapp.com/user/signin',
        data:{
            user_name: name,
            user_mail: mail,
            user_password: pass
        }

    }).then(function(res){
        console.log(res);
        alert("Registro exitoso");
        window.location.href ="interfaz.html";

    }).catch(function(err){
        console.log(err);
    });
};