(function () {
	var toast = 
	{
		show: function(msj,callback)
		{
			if(!callback)
				callback = function(){};
			
			var toastContainer = document.querySelector("#toastContainer");
			var toastDiv = document.createElement("div");
			var toastMsj = document.createElement("p");

			toastDiv.classList.add('toast');
			toastDiv.classList.add('left');
			toastMsj.innerText = msj;
			toastDiv.appendChild(toastMsj);
			toastContainer.appendChild(toastDiv);

			setTimeout(function(){
				 toastDiv.classList.remove("left");
				 toastDiv.classList.add("left-out");
				 callback();
			},5000);
			setTimeout(function(){toast.removeToast(toastDiv)},6000);
		},
		removeToast:function (toastDiv) {
				toastDiv.remove();
		}
	}
	window.toast = toast;
})();