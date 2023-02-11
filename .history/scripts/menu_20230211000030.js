const menu = document.getElementById('menu-button');
const linkMenu = document.querySelector('menu')

if
menu.addEventListener('click', event =>{
    linkMenu.style.display = 'block';
})

if(linkMenu.style.display =='block'){
    menu.addEventListener('click', event =>{
        linkMenu.style.display = 'none'
    })
}