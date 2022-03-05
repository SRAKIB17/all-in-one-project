const getId = (id) => document.getElementById(id);

const getCarousel = document.querySelectorAll('.carousel-image');
var index = 0;
setInterval(()=>{
    showImage(index);
    index++
},2000)

function showImage(indexSlide){
    
    // hidden all image 
    getCarousel.forEach(imageHidden=>imageHidden.style.display = 'none');


    // valid getCarousel index
    if (indexSlide < 0){
        index = getCarousel.length-1;
        indexSlide = index;
    }
    else if (indexSlide > getCarousel.length-1){
        index = 0;
        indexSlide = 0;
    }
    // display specific image 
    getCarousel[indexSlide].style.display = 'block'
    
}
getId('next').addEventListener('click',()=>{
    showImage(index++)
})
getId('prev').addEventListener('click',()=>{
    showImage(index--)
})

// create slider veiw 
if(getId('bottomInd')){
    
    for (let index = 0; index < getCarousel.length; index++) {
        console.log(index)
        const div = document.createElement('div');
        div.className = 'indicator'
        getId('bottomInd').appendChild(div)

    }
}


// copy code 
function copy(id){
    document.getElementById(id).select()
    document.execCommand('copy')
}
 