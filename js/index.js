// for Headers
const Header = getId('header');
// for left maenu 
const leftArrayTitle = ['Jumping another page','Result convert cgp','Simple calculator','Temperature','Icon manager','BMI calculator']
leftArrayTitle.sort();
const left = getId('left');
// left.style.height = window.innerHeight-Header.clientHeight+'px';
// create ul 
const leftUl = document.createElement('ul')

left.appendChild(leftUl)
for (let index = 0; index < leftArrayTitle.length; index++) {
    const li = document.createElement('li')
    li.setAttribute('onclick','goPage(this)')
    li.innerText = leftArrayTitle[index];

    leftUl.appendChild(li)
}


function goPage(link){
    localStorage.setItem('url-page','services/'+link.innerText);
    titleMake()
    getId('result').style.display = 'none'
    getId('search-input').style.display = 'none'
    getId('htmlPage').src = localStorage.getItem('url-page');
}
// function for title 
titleMake()
function titleMake(){
    const title = localStorage.getItem('url-page').split('/');
    if (title.length == 2){
        getId('pageTitle').innerText = title[1]
    }
    else{
        getId('pageTitle').innerText = title[0].split('.')[0];
    }
}


// 
function goHome(){
    titleMake()
    localStorage.setItem('url-page','Home.html')
    getId('htmlPage').src = localStorage.getItem('url-page');
}
// iframe localStorage save date and use 
if(localStorage.getItem('url-page')){
    getId('htmlPage').src = localStorage.getItem('url-page');
}
