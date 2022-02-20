const breakPoint = window.innerWidth;

const center = getId('center')
const footerMenu = getId('footerMenu')
const showFooter = getId('showFooter');
const footerSection = getId('footerSection')
if(breakPoint > 990){
    footerMenu.style.height = window.innerHeight-Header.clientHeight+'px';
    showFooter.style.display = 'none'

    // for center positon 
    center.style.height = window.innerHeight-Header.clientHeight+'px';
}
else if(breakPoint < 990){
    
    footerSection.style.marginTop = '30px'
    showFooter.style.top = Header.clientHeight+10+'px';
    footerMenu.style.top = Header.clientHeight+10+'px';
    footerMenu.style.height = window.innerHeight-Header.clientHeight+'px';
    footerMenu.style.width = '150px'
    // for center positon 

    center.style.height = window.innerHeight-Header.clientHeight+'px';
}

function reload(){
    if(breakPoint > 990){
        footerMenu.style.height = window.innerHeight-Header.clientHeight+'px';
        showFooter.style.display = 'none'
        getId('leftMenuBar').style.display = 'none';
        // for center positon 
        center.style.height = window.innerHeight-Header.clientHeight+'px';
    }
    else if(breakPoint < 990){
        
        footerSection.style.marginTop = '30px'
        showFooter.style.top = Header.clientHeight+10+'px';
    
        footerMenu.style.top = Header.clientHeight+10+'px';
        footerMenu.style.height = window.innerHeight-Header.clientHeight+'px';
        footerMenu.style.width = '150px'
        // for center positon 
    
        center.style.height = window.innerHeight-Header.clientHeight+'px';
    }
}