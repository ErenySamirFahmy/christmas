const btnoff = document.getElementById("off");
const btnon = document.getElementById("on");
const reds = document.querySelectorAll(".redcir");
const yellows = document.querySelectorAll(".yellowcir");
const blues = document.querySelectorAll(".bluecir");
function off(){
    document.querySelector("#star").setAttribute("class","staroff");
    document.querySelector("#shadow").setAttribute("class","shadowoff");
    reds.forEach(red => {
        red.classList.replace("red","redoff")
    });
    yellows.forEach(yellow => {
        yellow.classList.replace("yellow","yellowoff")
    });
    blues.forEach(blue => {
        blue.classList.replace("blue","blueoff")
    });
}

btnoff.onclick = off;

function on(){
    document.querySelector("#star").setAttribute("class","staron");
    document.querySelector("#shadow").setAttribute("class","starshadow");
    reds.forEach(red => {
        red.classList.add("red")
    });
    yellows.forEach(yellow => {
        yellow.classList.add("yellow")
    });
    blues.forEach(blue => {
        blue.classList.add("blue")
    });
}
btnon.onclick = on;

/*function onTOWebPageLoaded(){
    initSnow( 1, ["#b6d6f7","#90bfef","#2196f3"], 45, 0.6, 15, 40 );
}*/

function createSnowFlake() {
	// Creating the <i> tag
	const snow_flake = document.createElement('i');
	// Adding the required classes for the FontAwesome icon to show up
	snow_flake.classList.add('fa');
	snow_flake.classList.add('fa-snowflake-o');

	// Randomly generate the width to be between 10 and 20 px
	snow_flake.style.width = Math.random() * 10 + 10 + 'px';

	// Randomly generate the left position to be between 0 and the innerWidth of the screen
	snow_flake.style.left = Math.random() * window.innerWidth + 'px';
    
	// Randomly generate the animationDuration - between 2 and 5 seconds
	snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's';

	// Randomly add an opacity - between 0 and 1
	snow_flake.style.opacity = Math.random();

	// Add the newly created <i> tag inside the <body> tag
	document.body.appendChild(snow_flake);

	// Set a timeout to remove the snow_flake from the DOM after 5 seconds
	// as we don't want it to overload the page
	setTimeout(() => {
		snow_flake.remove();
	}, 5000);
}
setInterval(createSnowFlake, 100);

const body = document.body;
const endTime = new Date('December 31 2022 23:59:59');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


setInterval(updateCountdown, 1000)
setInterval(createSnowFlake, 50);


function updateCountdown() {
  const startTime = new Date();
  const diff = endTime - startTime;
  const days = Math.floor(diff / 1000 / 60 / 60 / 24);
  const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(diff / 1000 / 60) % 60;
  const seconds = Math.floor(diff / 1000) % 60;
  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours < 10 ? '0'+hours : hours;
  minutesEl.innerHTML = minutes < 10 ? '0'+minutes : minutes;
  secondsEl.innerHTML = seconds < 10 ? '0'+seconds : seconds;
}
