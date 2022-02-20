
const center = getId('center')
const footerMenu = getId('footerMenu')

const iframe = getId('htmlPage')

reload()
function reload(){
        iframe.style.height = window.innerHeight-Header.clientHeight+'px';
        
        footerMenu.style.height = window.innerHeight-Header.clientHeight+'px';

        center.style.height = window.innerHeight-Header.clientHeight+'px';
}