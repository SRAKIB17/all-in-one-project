

// save page no for refresh
function savePageData(save,value){
    localStorage.setItem(save,value);
}

function getPageData(save,info){
    if(localStorage.getItem(save)){
        return localStorage.getItem(save);
    }
    else{
        return info;
    }
}

function getId(id){
    return document.getElementById(id);
}

setTimeout(showDefault,100);

function showDefault(){
    const page = getPageData('pageNo',1)
    showIcon(page)
}
function showIcon(page){
    setTimeout(busy, 10)
    function busy(){
        const icon = document.getElementById('icon');
        icon.innerHTML = `<div class="flex justify-center align-center">
        <img src="images/busy.gif" class='w-full h-[40px]' alt="">
      </div>`
      setTimeout(showing,1000)
    }

    function showing(){
        let perPage = getPageData('perPage',50)
        
        getId('perPage').value = localStorage.getItem('perPage')
        if (perPage< 30 || perPage > 200) {
            perPage = 30;
            document.getElementById('error').innerText = 'please enter a valid numbet ...per page from 30 to 200'
        }
        else{
            document.getElementById('error').innerText = ''
        }
        
        if (page.value>1) {
            autoDivIcon(page.value,perPage)
            pageStyle(page.value);
            localStorage.setItem('pageNo',page.value);
            return divIcon = '';
        }
        else{
            autoDivIcon(page,perPage)
            pageStyle(page)
            return divIcon = ''
        }
    }
    
}
// create auto matic div for icon 
function autoDivIcon(page,perPage){
    pageCount(perPage)
    let divIcon = '';
    const icon = document.getElementById('icon');
    icon.innerHTML = ''
    let index = perPage*(page-1)
    let showIcon = page*perPage - 1;
    if (index == 0){
        index =1
        showIcon = perPage
    }
    while (index <= showIcon) {
        divIcon = 
                `<div id="icon-2" class="p-1 w-full rounded-sm  shadow-sm shadow-cyan-500 relative icon hover:shadow-blue-500 hover:shadow-md">
                    <div class=" bg-red-50 top-0 left-0 bottom-0  p-1 z-[-1]">
                        <img src="images/128px/${index}.png" alt="" >
                     </div>
                    <div class="absolute justify-between z-20 download">
                        <div class="bg-violet-200 rounded-md hover:bg-violet-400">
                            <a href="images/32px/${index}.png" class="z-40" download="">
                                <i style="font-size:20px" class="fa">32px</i>
                            </a>
                        </div>
                        <div class="bg-yellow-200 rounded-md hover:bg-yellow-400">
                            <h3>
                                <a href="images/64px/${index}.png" class="z-40" download="">
                                    <i style="font-size:20px" class="fa">64px</i>
                                </a>
                            </h3>
                        </div>
                        <div class="bg-green-200 hover:bg-green-400">
                            <a href="images/128px/${index}.png" class="z-40" download="">
                                <i style="font-size:24px" class="fa">&#xf019;</i>
                            </a>
                            
                        </div>
        
                    </div>
                </div>`
        icon.innerHTML += divIcon
        index++
    }
}

// iconView
// page style 
function pageStyle(page){
    let buttonCount = document.getElementById('page').children;
    for (let index = 1; index <= buttonCount.length; index++) {
        if(index == page){
            let getId = document.getElementById('page-'+index);

            getId.setAttribute('disabled',true)
            getId.classList.remove('bg-[#485e7a]','hover:bg-[#506e96]','hover:border-indigo-600')
            getId.classList.add('bg-blue-500')
        }
        else {
            let getId = document.getElementById('page-'+index);
            getId.removeAttribute('disabled')
            getId.classList.add('bg-[#485e7a]','hover:bg-[#506e96]','hover:border-indigo-600')
            getId.classList.remove('bg-red-500')
        }         
    }
}