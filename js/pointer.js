var arrImages = ["img/artist-3480274__340.jpg", "img/clouds-149344__340.png","img/girl-3316342__340.jpg","img/hand-2599052__340.jpg","img/hot-air-balloon-3648832__340.jpg","img/magnolia-2832443__340.jpg","img/megaphone-2374502__340.png","img/megaphone-2374502__340.png","img/mountains-2098408__340.jpg","img/piglet-3386356__340.jpg","img/shoe-2538424__340.jpg","img/the-night-sky-4051288__340.jpg","img/artist-3480274__340.jpg","img/artist-3480274__340.jpg","img/artist-3480274__340.jpg","img/artist-3480274__340.jpg","img/artist-3480274__340.jpg","img/artist-3480274__340.jpg","img/artist-3480274__340.jpg","img/artist-3480274__340.jpg","img/artist-3480274__340.jpg","img/artist-3480274__340.jpg","img/artist-3480274__340.jpg","img/artist-3480274__340.jpg","img/artist-3480274__340.jpg","img/artist-3480274__340.jpg","img/artist-3480274__340.jpg"];

var windoWidth = document.body.clientWidth;

if (windoWidth < 576){
	var imageAmount = 7;
} else if (windoWidth >= 576 && windoWidth < 768) {
	var imageAmount = 14;
} else if (windoWidth >= 768 && windoWidth < 992) {
	var imageAmount = 20;
} else if (windoWidth >= 992 && windoWidth < 1200) {
	var imageAmount = 20;
} else if (windoWidth >= 1200 && windoWidth < 1800) {
	var imageAmount = 24;
} 

var imagesField = document.createElement('template');
	for(var i=0; i<imageAmount; i++){
		imagesField.innerHTML += `	<div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-2">
            							<img src="${arrImages[i]}" alt="Logo" class="picture">
        							</div>  `;
	}
	document.querySelector(".row").appendChild(imagesField.content);

