// for Headers
const Header = getId('header');
// for left maenu 
const leftArrayTitle = ['Jumping another page','Result convert cgp','Simple calculator','Temperature','Icon manager','BMI calculator']
leftArrayTitle.sort();
const left = getId('left');

// create ul 
const leftUl = document.createElement('ul')

left.appendChild(leftUl)
for (let index = 0; index < leftArrayTitle.length; index++) {
    const li = document.createElement('li')
    
    const a = document.createElement('a');
    // here first: target page second:prev path 
    a.setAttribute('href',`#${leftArrayTitle[index]}#services`)
    a.setAttribute('onclick','goPage(this)')
    a.innerText = leftArrayTitle[index];
    li.appendChild(a);
    leftUl.appendChild(li)
}

const loading = (display) =>{
    getId('loading').style.display = display;
}

function goPage(page){
    loading('flex')
    const getLink = page.href
    
    const splitLink = getLink.split('#');

    const link = `/${splitLink[2]}/${splitLink[1]}`;
    console.log(link)
    getId('pageTitle').innerText = decodeURI(splitLink[1]);
    // location.assign(link)
    localStorage.setItem('url-page',link);
    getId('result').style.display = 'none'
    getId('search-input').style.display = 'none'
    document.getElementById('htmlPage').src = localStorage.getItem('url-page');
    // auto update copy link 
    getId('copyUrl').value = getLink;
    loading('none')
}


titleMake()
function titleMake(){
    const titleUrl = localStorage.getItem('url-page').split('/');
    const title = titleUrl[titleUrl.length-1];
    getId('pageTitle').innerText = decodeURI(title);
}


// 
// function goHome(){
//     titleMake()
//     localStorage.setItem('url-page','Home.html')
//     getId('htmlPage').src = localStorage.getItem('url-page');
// }
// iframe localStorage save date and use
if(localStorage.getItem('url-page')){
    getId('htmlPage').src = localStorage.getItem('url-page');
}
// auto add extenction end page
if(location.hash == ''){
    const getPageUrl = localStorage.getItem('url-page').split('/');
    console.log(getPageUrl)
    location.href = `#${getPageUrl[getPageUrl.length-1]}#${getPageUrl[getPageUrl.length-2]}`
}


