const pic = document.querySelector('.about-pic')

function changePic() {
	setInterval(() => {
		for(let i = 1; i < 5; i++) {
			pic.src = `Photo${i}.jpg`
		}
	},1)
}

changePic()






/*
1) Use `Photo${num}.jpg`
2) Use a timer to change the picture every 15 seconds 
3) make a loop (could just use i as the number)
4) Have the function repeat every 15 seconds
pic.src = "Photo2.jpg"
*/ 