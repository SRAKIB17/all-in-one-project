// search control input box 
function getId(Element){
    const elment = document.getElementById(Element);
    return elment;
}

getId('SearchIcon').onclick = showSearchBox;
function showSearchBox(){

    getId('search-input').style.display = 'inline'
    getId('result').style.display = 'block';

    getId('result').style.top = getId('header').clientHeight+'px';
    
    getId('SearchIcon').onclick = closeSearchBox;
}

function closeSearchBox(){
    getId('result').style.display = 'none'
    getId('search-input').style.display = 'none'
    getId('SearchIcon').onclick = showSearchBox;
}

// keyup function auto show result
let searchQ = ''
getId('search-input').addEventListener('keyup', function(event){
    let wait = '<div id="busyGIF"><img src="images/busy.gif"  alt=""></div>'
    getId('busy').innerHTML = wait;
    searchQ = event.target.value;
    setTimeout(resultReturn,1000)
})
getId('search-input').addEventListener('change', function(event){
    let wait = '<div id="busyGIF"><img src="images/busy.gif"  alt=""></div>'
    getId('busy').innerHTML = wait;
    searchQ = event.target.value;
    setTimeout(resultReturn,1000)
})


function resultReturn(){
    let getResult = `<ul id='searchUl'>`;

    
    const result = leftArrayTitle.filter(x=> x.toLowerCase().includes(searchQ.toLowerCase()) && (searchQ != '' && searchQ != ' '))
    
    if (result.length == 0){
        getResult = 
        `<div>
            <h2 class="searchNotFound">Not Found 😢</h2>
        </div>`
    }
    for (const pageResult of result) {
        
        let index = pageResult.toLowerCase().search(searchQ.toLowerCase())

        let slice = pageResult.slice(index, index + searchQ.length);
        let splitJoin = pageResult.split(slice).join('<span class="highlight">'+slice+'</span>')
        getResult += `<li>
        <a href="#${pageResult}#services"  onclick='goPage(this)'>`+splitJoin+`</a></li>`;
        
    }
    
    getId('busy').innerHTML = getResult+'</ul>';
}
