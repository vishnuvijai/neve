function smoothscroll(target,find){
	$(target).find(find).on("click",function (event) {
	   
		if (this.hash !=="") {

			event.preventDefault();

			var hash = this.hash;

			$('html,body').animate({ scrollTop: $(this.hash).offset().top}, 200, function () {
				window.location.hash = hash;
			});
		}

	});

}
