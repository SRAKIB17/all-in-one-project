
document.getElementById('jump').addEventListener('click', function(){
  const vv = document.getElementById('j-url').value;
  location.assign(`${location.href}?url=${vv}`)
})

const getUrl = location.search;
const getId = getUrl.search('url');
console.log(getId)
console.log(getUrl)

if(getUrl.includes('?',getId) && getUrl != ''){
  const getPath = getUrl.slice(getId+4,-1)
  console.log(getPath)
  location.assign(getPath)
}
else if(getUrl != ''){
  const getPath = getUrl.slice(getId+4);
  // location.assign(getPath)
}

