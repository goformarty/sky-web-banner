# sky-web-banner

## Challenge:
Create an MPU web banner. The duration of the banner is limited to 15 seconds.

You are not required to build an object oriented solution. 
The simpler you make the programming, the easier it will be to complete the task.

## Approach:
- export all required images from the .psd file; 
- load all external CreateJS scripts;
- center the canvas on the page with CSS;
- store the reference to the canvas with CreateJS;
- create preloader to load all images with PreloaderJS;
- add Ticker event listener with CreateJS;
- fade in background image;
- frame 1:
  - create all frame 1 elements and store them in a container;
  - animate all frame 1 elements;
  - fade out container 1;
  - leave background and logo;
- frame 2 & frame 3 - as frame 1;
- remove Ticker after all animations finished;

## Technologies:
- JavaScript;
- CreateJS libraries: 
    - EaselJS;
    - PreloadJS;
    - TweenJS;
- HTML, CSS;

## Software:
- Photoshop CS6;
- Sublime Text;

## Ways to improve:
- add unit testing with js-imagediff and Jasmine;
- optimise the solution for the sheen effect on the button;
