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
		setTimeout(frame1, 1000);
	}
	
	function frame1() {
		console.log("draw and animate frame one.");
		
		// refer to the creative brief, frame 1 for guidance.

		// create products element: 
		// provide the loader result for the item with id == 'products'
		// as a bitmap which will be stored in our products variable.
		products = new createjs.Bitmap( loader.getResult( "products" ) );

		// create logo element:
		// provide the loader result for the item with id == 'logo'
		// as a bitmap which will be stored in our logo variable.
		logo = new createjs.Bitmap( loader.getResult( "logo" ) );
		stage.addChild(logo);

		// create gradient text element:
		// provide the loader result for the item with id == 'gradient1'
		// as a bitmap which will be stored in our gradient1 variable.
		gradient1 = new createjs.Bitmap( loader.getResult( "gradient1" ) );
		// set the gradient1 bitmap alpha to zero.
		gradient1.alpha = 0;
		// animate the bluecopy bitmap alpha value to 1
		// over the duration of 1000 milliseconds.
		createjs.Tween.get(gradient1).to({alpha:1}, 1000);

		// create blue copy text element:
		// provide the loader result for the item with id == 'bluecopy'
		// as a bitmap which will be stored in our bluecopy variable.
		bluecopy = new createjs.Bitmap( loader.getResult( "bluecopy" ) );
		// set the bluecopy bitmap alpha to zero
		bluecopy.alpha = 0;
		// animate the bluecopy bitmap alpha value to 1
		// after waiting for 1000 miliseconds
		// over the duration of 1000 milliseconds.
		createjs.Tween.get(bluecopy).wait(700).to({alpha:1}, 800);

		// create container to store frame1 elements - all except the logo.
		container1 = stage.addChild(new createjs.Container());

		// add elements to container1.
		container1.addChild(products, gradient1, bluecopy);

		// animate the container1 alpha value to 0
		// after waiting for 2000 miliseconds
		// over the duration of 1000 milliseconds.
		createjs.Tween.get(container1).wait(4000).to({alpha:0}, 1000);
		
		// after a timeout and the animations have completed, draw frame 2.
		setTimeout(frame2, 5000);
	}
	
	function frame2() {
		console.log("draw and animate frame two.");
		
		// refer to the creative brief, frame 2 for guidance.

		// create gradient text element:
		// provide the loader result for the item with id == 'gradient2'
		// as a bitmap which will be stored in our gradient2 variable.
		gradient2 = new createjs.Bitmap( loader.getResult( "gradient2" ) );
		// set the gradient1 bitmap alpha to zero.
		gradient2.alpha = 0;
		// animate the bluecopy bitmap alpha value to 1
		// over the duration of 1000 milliseconds.
		createjs.Tween.get(gradient2).to({alpha:1}, 1000);

		// create grey copy text element:
		// provide the loader result for the item with id == 'greycopy'
		// as a bitmap which will be stored in our greycopy variable.
		greycopy = new createjs.Bitmap( loader.getResult( "greycopy" ) );
		// set the greycopy bitmap alpha to zero
		greycopy.alpha = 0;
		// animate the bluecopy bitmap alpha value to 1
		// after waiting for 1000 miliseconds
		// over the duration of 1000 milliseconds.
		createjs.Tween.get(greycopy).wait(500).to({alpha:1}, 2000);
		
		// create stamp element:
		// provide the loader result for the item with id == 'stamp'
		// as a bitmap which will be stored in our stamp variable.
		stamp = new createjs.Bitmap( loader.getResult( "stamp" ) );
		// move stamp element above the canvas
		stamp.y = -250;
		// animate the stamp bitmap y value to 0 with bounceOut effect
		// after waiting for 1000 miliseconds
		// over the duration of 1000 milliseconds.
		createjs.Tween.get(stamp).wait(1000).to({y:0}, 700, createjs.Ease.bounceOut);


		// create container to store frame2 elements - all except the logo.
		container2 = stage.addChild(new createjs.Container());
		// add elements to container2.
		container2.addChild(gradient2, greycopy, stamp);
		// animate the container2 alpha value to 0
		// after waiting for 2000 miliseconds
		// over the duration of 1000 milliseconds.
		createjs.Tween.get(container2).wait(4000).to({alpha:0}, 1000);

		
		// after a timeout and the animations have completed, draw frame 3.
		setTimeout(frame3, 5000);
	}
	
	function frame3() {
		console.log("draw and animate frame three.");
		
		// refer to the creative brief, frame 3 for guidance.

		// create call to action element: 
		// provide the loader result for the item with id == 'cta'
		// as a bitmap which will be stored in our cta variable.
		cta = new createjs.Bitmap( loader.getResult( "cta" ) );



		


		// create gradient text element:
		// provide the loader result for the item with id == 'gradient3'
		// as a bitmap which will be stored in our gradient3 variable.
		gradient3 = new createjs.Bitmap( loader.getResult( "gradient3" ) );
		// set the gradient1 bitmap alpha to zero.
		gradient3.alpha = 0;
		// animate the bluecopy bitmap alpha value to 1
		// over the duration of 1000 milliseconds.
		createjs.Tween.get(gradient3).to({alpha:1}, 1000);

		// create blue copy text element:
		// provide the loader result for the item with id == 'bluecopy3'
		// as a bitmap which will be stored in our bluecopy3 variable.
		bluecopy3 = new createjs.Bitmap( loader.getResult( "bluecopy3" ) );
		// set the bluecopy3 bitmap alpha to zero
		bluecopy3.alpha = 0;
		// animate the bluecopy bitmap alpha value to 1
		// after waiting for 1000 miliseconds
		// over the duration of 1000 milliseconds.
		createjs.Tween.get(bluecopy3).wait(1000).to({alpha:1}, 1000);

		// create gradient text element:
		// provide the loader result for the item with id == 'gradient3a'
		// as a bitmap which will be stored in our gradient3a variable.
		gradient3a = new createjs.Bitmap( loader.getResult( "gradient3a" ) );
		// set the gradient3a bitmap alpha to zero
		gradient3a.alpha = 0;
		// animate the gradient3a bitmap alpha value to 1
		// after waiting for 2000 miliseconds
		// over the duration of 1000 milliseconds.
		createjs.Tween.get(gradient3a).wait(2000).to({alpha:1}, 1000);

		// create grey copy text element:
		// provide the loader result for the item with id == 'greycopy3'
		// as a bitmap which will be stored in our greycopy3 variable.
		greycopy3 = new createjs.Bitmap( loader.getResult( "greycopy3" ) );
		// set the greycopy3 bitmap alpha to zero
		greycopy3.alpha = 0;
		// animate the greycopy3 bitmap alpha value to 1
		// after waiting for 3000 miliseconds
		// over the duration of 1000 milliseconds.
		createjs.Tween.get(greycopy3).wait(2500).to({alpha:1}, 1000);

		// create cta sheen element:
		// provide the loader result for the item with id == 'ctaSheen'
		// as a bitmap which will be stored in our ctaSheen variable.
		ctaSheen = new createjs.Bitmap( loader.getResult( "ctaSheen" ) );
		// move ctaSheen element above the canvas
		ctaSheen.alpha = 0;
		// animate the stamp bitmap y value to 0 with bounceOut effect
		// after waiting for 4000 miliseconds
		// over the duration of 1000 milliseconds.
		createjs.Tween.get(ctaSheen).wait(3500).call(sheenEffect).to({alpha:1}, 500, createjs.Ease.elasticInOut).wait(1000).to({alpha:0}, 500, createjs.Ease.elasticInOut);

		function sheenEffect() {
			var imgSheen = new createjs.Shape();
			var c = new createjs.Container();
			c.addChild(imgSheen);

			imgSheen.graphics.beginLinearGradientFill(['rgba(255,255,255,0)', '#000', 'rgba(255,255,255,0)'], [0, 0.5, 1], 0, 0, 120, 0).drawRect(0, 0, 100, 250);
			c.cache(0,0,100,250);

			createjs.Tween.get(imgSheen).to({x:300}, 1200, createjs.Ease.quadInOut)
			.on("change", function() { 
				c.cache(0,0,300,250); 
				ctaSheen.cache(0,0,ctaSheen.image.width,ctaSheen.image.height);
			});

			ctaSheen.filters = [
			new createjs.AlphaMaskFilter(c.cacheCanvas)
			];
		}

		// create container to store frame3 elements - all except the logo.
		container3 = stage.addChild(new createjs.Container());
		// add elements to container2.
		container3.addChild(gradient3, bluecopy3, gradient3a, greycopy3, cta, ctaSheen);
		// after a timeout and the animations have completed, clear the stage.
		setTimeout(clearTheStage, 9000);
	}
	function clearTheStage() {
		console.log("Stop all animations.");
		createjs.Ticker.removeEventListener("tick", handleTick);
	}
};