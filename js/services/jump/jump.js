
const getUrl = location.search;
const getIndex = getUrl.search('urlj');

if(getUrl.includes('?',getIndex) && getUrl != ''){
    const getPath = getUrl.slice(getIndex+5,-1);

    location.assign(getPath)
}
else if(getUrl != ''){
    const getPath = getUrl.slice(getIndex+5);
    location.assign(getPath)
}
// add http://
// function addHttp(getPath){
//     if(!getPath.includes('http')){
        
//     }
// }
// copy code
function copy(id){
    document.getElementById(id).select()
    document.execCommand('copy')
}
 