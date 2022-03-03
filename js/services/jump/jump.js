
const getUrl = location.search;
const getIndex = getUrl.search('urlj');

if(getUrl.includes('urlj') && getUrl != ''){
    const getPath = getUrl.slice(getIndex+5);
    console.log(getPath)
    const goPage = addHttp(getPath);
    location.assign(goPage);
}


// add http://
function addHttp(getPath){
    console.log(getPath)
    if(!getPath.includes('http')){
        return `http://${getPath}`;
    }
    else{
        return getPath;
    }
}
// copy code
function copy(id){
    document.getElementById(id).select()
    document.execCommand('copy')
}