//implementar
	var users = [{email : "mariacg@gmail.com",password : "123456"},
				{email : "mery@laboratoria.la",password : "654321"},
				{email : "maria@laboratoria.la",password : "987654"}];

document.getElementById('button-login').addEventListener("click",function(e){
	var ema = document.getElementById('email').value;
	var pwd = document.getElementById('pwd').value;	
	var validation;

			users.forEach(function(e){
				if (e.email == ema && e.password == pwd){
					validation = true;
				}
			});

			if (validation == true){window.location = "index.html";}
			else{alert("Datos incorrectos");}
	e.preventDefault();	
});





