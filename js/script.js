// JavaScript Document
window.onload = function(){
	console.log("Junior developer test.");
	
	// declare your variables here.
	var background, logo, container1, container2, container3, 
	gradient1, gradient2, gradient3, gradient3a, bluecopy, products, greycopy,
	stamp, cta, ctaSheen, bluecopy3, greycopy3;
	
	
	// store a reference to the canvas which we will draw on.
	var stage = new createjs.Stage("stage");
	
	// register the stage to handle mouse events. 
	stage.enableMouseOver(10);
	
	// register the Ticker to listen for the tick event.
	createjs.Ticker.addEventListener("tick", handleTick, false);
	
	// redraw the canvas - like Event.ENTER_FRAME in Adobe Flash.
	function handleTick(event) {
		stage.update();
	}
	
	// create a preloader to load the images.
	var loader = new createjs.LoadQueue(false);
	
	// when all images are loaded call the handleAllImageLoaded function.
	loader.on('complete', handleAllImagesLoaded, this);
	
	// provide a manifest of files and ids to be loaded.
	loader.loadManifest([
		{id: "background", src:"images/background.png"},
		{id: "logo", src:"images/logo.png"},
		{id: "gradient1", src:"images/gradient1.png"},
		{id: "bluecopy", src:"images/bluecopy.png"},
		{id: "products", src:"images/products.png"},
		{id: "gradient2", src:"images/gradient2.png"},
		{id: "greycopy", src:"images/greycopy.png"},
		{id: "stamp", src:"images/stamp.png"},
		{id: "cta", src:"images/cta.png"},
		{id: "gradient3", src:"images/gradient3.png"},
		{id: "bluecopy3", src:"images/bluecopy3.png"},
		{id: "gradient3a", src:"images/gradient3a.png"},
		{id: "greycopy3", src:"images/greycopy3.png"},
		{id: "ctaSheen", src:"images/ctaSheen.png"}
		]);
	
	function handleAllImagesLoaded() {
		console.log("All the images have loaded.");
		drawTheBannerBackground();
	}
	
	function drawTheBannerBackground() {
		console.log("draw and animate the background.");
		
		// provide the loader result for the item with id == 'background'
		// as a bitmap which will be stored in our background variable.
		background = new createjs.Bitmap( loader.getResult( "background" ) );
		
		// set the background bitmap alpha to zero.
		background.alpha = 0;
		
		// add background to the display list.
		stage.addChild( background );
		
		// animate the background bitmap alpha value to 1 over the duration of 1000 milliseconds.
		createjs.Tween.get( background ).to( {alpha:1}, 1000 );
		
		// after the background is drawn on the canvas draw and animate the content for frame 1.
		setTimeout(frame1, 100);
	}
	
	function frame1() {
		console.log("draw and animate frame one.");
		
		// refer to the creative brief, frame 1 for guidance.
		
		// after a timeout and the animations have completed, draw frame 2.
		setTimeout(frame2, 3000);
	}
	
	function frame2() {
		console.log("draw and animate frame two.");
		
		// refer to the creative brief, frame 2 for guidance.
		
		// after a timeout and the animations have completed, draw frame 3.
		setTimeout(frame3, 3000);
	}
	
	function frame3() {
		console.log("draw and animate frame three.");
		
		// refer to the creative brief, frame 3 for guidance.
	}
	
};