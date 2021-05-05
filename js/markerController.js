var num = 0; //number of markers identified
AFRAME.registerComponent('registerevents', { //function call from html marker identified
	init: function(){
		var marker = this.el; //marker active
		var controlls = document.querySelector("#controlls"); //video control
		var links = document.querySelector('#links'); //contact links
		var vid; //video var
		marker.addEventListener('markerFound', function(){ //marker found event listener
			num++; //add marker identifies
			console.log(num);
			controlls.style.visibility = 'visible'; 
			links.style.visibility = 'visible'; /**comes visible buttons**/
			jQuery(".btn").addClass('animate');
			jQuery(".btnlinks").addClass('animate'); /**animate buttons from css**/
			var markerId = marker.id; // get id from marker identified
			console.log(markerId+ " found");
			if(markerId == "centralMarker"){ //display information according to the marker id
				vid = document.querySelector("#vid");
				vid.play();
				document.getElementById('website').addEventListener('click', (e)=>{
					location.href = "https://www.centraldeletras3d.com.mx/";
				});
				document.getElementById('telephone').addEventListener('click', (e)=>{
					location.href = "tel:+525557603407";
				});
				document.getElementById('email').addEventListener('click', (e)=>{
					location.href = "mailto:centraldeplacas@gmail.com";
				});
			}
			if(markerId == "ownMarker"){ //display information according to the marker id
				vid = document.querySelector("#vid2");
				vid.play();
				document.getElementById('website').addEventListener('click', (e)=>{
					location.href = "https://www.google.com.mx/";
				});
				document.getElementById('telephone').addEventListener('click', (e)=>{
					location.href = "tel:+5255555555";
				});
				document.getElementById('email').addEventListener('click', (e)=>{
					location.href = "mailto:centraldeplacas@gmail.com";
				});
			}
		});
		marker.addEventListener('markerLost', function(){ //marker lost event listener
			num--;
			console.log(num);
			if(num==0){
				controlls.style.visibility = 'hidden';
				links.style.visibility = 'hidden'; /**comes hidden buttons**/
				jQuery(".btn").removeClass('animate');
				jQuery(".btnlinks").removeClass('animate'); /***remove animation**/
				document.querySelector('#sceneCamera').style.background="rgba(0, 0, 0, 0)";
				document.querySelector('#controlls').style.background="rgba(0, 0, 0, 0)";
				document.getElementById('brightness').value="off"; /***remove brightness**/
			}
			var markerId = marker.id; // get id from marker identified
			console.log(markerId+ " lost");
			if(markerId == "centralMarker"){ //remove and pause video according to the marker identified
				vid = document.querySelector("#vid")
				vid.pause();
				vid = null;
			}
			if(markerId == "ownMarker"){  //remove and pause video according to the marker identified
				vid = document.querySelector("#vid2")
				vid.pause();
				vid = null;
			}
		});
		document.getElementById('play').addEventListener('click', (e)=>{ // play video
			vid.play();
		});
		document.getElementById('pause').addEventListener('click', (e)=>{ // pause video
			vid.pause();
		});
	}
});
