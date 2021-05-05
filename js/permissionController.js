window.onload = function what(){
	var element = document.getElementById("text");
	navigator.permissions.query({name: 'camera'})
	.then((permissionObj) => {
		console.log(permissionObj.state);
		if(permissionObj.state == 'prompt'){
			element.innerHTML = "Presiona Permitir para que podamos aumentar tu realidad";
			var onFailSoHard = function(e) {
				console.log('Reeeejected!', e);
				window.location.replace("C:/wamp/www/VR_CDP/denied.html");
			};
			// Not showing vendor prefixes.
			navigator.getUserMedia({video:true, audio:false}, function(localMediaStream) {
				{
					element.innerHTML = "Cargando...";
					window.location.replace("C:/wamp/www/VR_CDP/test.html");
				};
			}, onFailSoHard);
		}
		if(permissionObj.state == 'denied'){
			window.location.replace("C:/wamp/www/VR_CDP/denied.html");
		}
		if(permissionObj.state == 'granted'){
			window.location.replace("C:/wamp/www/VR_CDP/test.html");
		}
	})
	.catch((error) => {
		alert("Usar chrome")
	})
}
