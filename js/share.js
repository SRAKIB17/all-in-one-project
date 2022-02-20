const currentPage = location.hash;
getId('copyUrl').value = location.href;



const getLink = location.hash;

const splitLink = getLink.split('#');
// split link 
const link = `/${splitLink[2]}/${splitLink[1]}`;
console.log(link)
getId('pageTitle').innerText = decodeURI(splitLink[1]);
// location.assign(link)
localStorage.setItem('url-page',link);

document.getElementById('htmlPage').src = localStorage.getItem('url-page');

// copy input code /

function copy(id){
    document.getElementById(id).select()
    document.execCommand('copy')
}