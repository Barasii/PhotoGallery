var arrImages = ["img/artist-3480274__340.jpg", "img/clouds-149344__340.png","img/girl-3316342__340.jpg","img/hand-2599052__340.jpg","img/hot-air-balloon-3648832__340.jpg","img/magnolia-2832443__340.jpg","img/megaphone-2374502__340.png","img/megaphone-2374502__340.png","img/mountains-2098408__340.jpg","img/piglet-3386356__340.jpg","img/shoe-2538424__340.jpg","img/the-night-sky-4051288__340.jpg","img/artist-3480274__340.jpg","img/artist-3480274__340.jpg","img/clouds-149344__340.png","img/artist-3480274__340.jpg","img/artist-3480274__340.jpg","img/artist-3480274__340.jpg","img/artist-3480274__340.jpg","img/artist-3480274__340.jpg","img/artist-3480274__340.jpg","img/artist-3480274__340.jpg","img/artist-3480274__340.jpg","img/artist-3480274__340.jpg","img/artist-3480274__340.jpg","img/clouds-149344__340.png","img/artist-3480274__340.jpg"];

var imagesField = document.createElement('template');
	for(var i=0; i<arrImages.length; i++){
		imagesField.innerHTML += `	<div class="gallery__item">            							
            							 <a href="#" >
											<img src="${arrImages[i]}" alt="Logo" class="gallery__item_link">
            							 </a> 
        							</div>  `;
	}
	document.querySelector(".gallery").appendChild(imagesField.content);
// }