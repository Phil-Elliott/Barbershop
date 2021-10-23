const pic = document.querySelector('.about-pic')
const active = document.querySelector('.active')
const links = document.querySelectorAll('.link')

// highlights each nav link when clicked and removes highlight from previous nav link
function activeNavLink() {
	links.forEach((link) => {
		link.classList.remove("active")
		link.addEventListener('click', () => {
			links.forEach((link) => {
				link.classList.remove("active")
			})
			link.classList.add("active")
		})
	})
}

activeNavLink()

// highlights each nav link when scrolling and removes highlight from previous nav link
document.addEventListener('scroll',() => {
	for(let i = 0; i < 5; i++) {
		if (pageYOffset >= (i * 680)) {
			links.forEach((link) => {
				link.classList.remove("active")
			})
			links[i].classList.add("active")
		}
	}
})

// This is for the blured images on the right side of the about page
let num = 1
let load = 0 
let decrease = 100

// funtion used to blue the images 
const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

//start the interval
let int1 = setInterval(changePic, 12000)


function changePic() {
	num++
	decrease = 100

	// decreases the current pics visability
	let int3 = setInterval(() => {
	decrease--

	if (decrease < 30) {
		// the new picture will have the same blur as the previous
		load = decrease
		clearInterval(int3)
		// adds the new picture
		pic.src = `Photo${num}.jpg`
		// causes the pictures to loop
		if(num > 3) {
		num = 0;
	} // increases the visability on the new picture 
		let int2 = setInterval(() => {
			load++

			if (load > 99) {
				clearInterval(int2)
			}

			pic.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

		}, 30)
	}

	pic.style.filter = `blur(${scale(decrease, 0, 100, 30, 0)}px)`

	},30)
}


/*   get the buttons to be active on their designated part of the page
			3) Have a link become active when clicked and remove anyother active link 
				- remove classname from all others (maybe make a function for this) - do first
					- use a forEach to remove all of the active classes 
				- add the classname as clicked 
			4) Do the same think now with scroll

*/ 
