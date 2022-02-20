const currentPage = location.hash;
getId('copyUrl').value = location.href;
// const copyUrl = getId('copyUrl');
// const curPage = localStorage.getItem('url-page').split('/');
// copyUrl.innerText = `${location.href}#${curPage[curPage.length-1]}#${curPage[curPage.length-2]}`;
// console.log(curPage)

function copy(id){
    document.getElementById(id).select()
    document.execCommand('copy')
}