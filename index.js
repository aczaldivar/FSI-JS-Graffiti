let header = document.querySelector('#page-header')
header.style.textAlign = "left"


let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.borderRadius = '50px'
     
}

let dogname= document.querySelectorAll ('.dog-name')
for (let i=0; i < dogname.length; i++){
    dogname [i].style.color = 'purple'
}
 let dogImages1 = document.querySelectorAll ('.dog-image')
 for(let i = 0; i < dogImages1.length; i++)
 {
dogImages1[i].style.rotate= '180deg'
}

let footer = document.querySelector('.footer')
footer.style.borderStyle = 'solid'

