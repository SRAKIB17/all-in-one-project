document.getElementById('jump').addEventListener('click', function(){
    const page = document.getElementById('j-url').value;
    location.assign(`https://my-project-calculate.netlify.app/?urlj=${page}`)
})

// const getUrl = location.search;
// const getId = getUrl.search('urlj');

// if(getUrl.includes('?',getId) && getUrl != ''){
//     const getPath = getUrl.slice(getId+5,-1);

//     location.assign(getPath)
// }
// else if(getUrl != ''){
//     const getPath = getUrl.slice(getId+5);
//     location.assign(getPath)
// }

// copy code
function copy(id){
    document.getElementById(id).select()
    document.execCommand('copy')
}
 