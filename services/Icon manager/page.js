

const pageMain = document.getElementById('page')

function pageCount(perPage){
    let totalImage = 1000;
    let countPage = Math.round(totalImage/perPage);
    let page = 1;
    pageMain.innerHTML = ''
    while (page <= countPage){
        let pageDiv = `<button class="bg-[#485e7a] w-fit p-1 rounded-full text-white hover:bg-[#506e96] border-solid border-2 hover:border-indigo-600" value="${page}" id='page-${page}' onclick='showIcon(this)'>
        ${page}
        </button>`
        pageMain.innerHTML += pageDiv;
        page++
    }
}

document.getElementById('perPage').addEventListener('keyup',function(event){
    showIcon(1)
    savePageData('perPage',event.target.value);
    savePageData('pageNo',1);
})

document.getElementById('perPage').addEventListener('change',function(){
    showIcon(1)
    savePageData('perPage',event.target.value);
    savePageData('pageNo',1);
})