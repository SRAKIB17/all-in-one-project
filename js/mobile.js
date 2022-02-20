function getId(Element){
    const elment = document.getElementById(Element);
    return elment;
}

getId('leftMenuBar').onclick = showLeftMenu;

function showLeftMenu(){
    getId('search-input').style.display = 'none'
    getId('result').style.display = 'none'
    getId('displayLeftMenu').style.display = 'block';
    getId('leftMenuBar').onclick = closeLeftMenu;

}
function closeLeftMenu(){
    getId('search-input').style.display = 'none'
    getId('result').style.display = 'none'
    getId('displayLeftMenu').style.display = 'none';
    getId('leftMenuBar').onclick = showLeftMenu;

}
getId('showFooter').onclick = footerMenuShow;

function footerMenuShow(){
    getId('footerMenu').style.display = 'block'
    getId('showFooter').style.transform = 'rotate(-180deg)';
    getId('showFooter').onclick = footerMenuClose;
}

function footerMenuClose(){
    getId('footerMenu').style.display = 'none'
    getId('showFooter').style.transform = 'rotate(-360deg)';
    getId('showFooter').onclick = footerMenuShow;
}