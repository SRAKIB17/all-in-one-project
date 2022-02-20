const currentPage = location.hash;

const copyUrl = getId('copyUrl');
const curPage = localStorage.getItem('url-page').split('/');
copyUrl.innerText = `${location.href}#${curPage[curPage.length-1]}#${curPage[curPage.length-2]}`;
console.log(curPage)