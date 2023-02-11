const menu = document.getElementById('menu-button');
const linkMenu = document.querySelector('menu')


menu.addEventListener('click', event =>{
 

    if(linkMenu.style.display =='none'){
        linkMenu.style.display = 'block'
    }else{
           linkMenu.style.display = 'none';
    }
})

