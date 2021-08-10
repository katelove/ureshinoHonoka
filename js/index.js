//打開menu 選單
const menu=document.getElementById('menu-point')
const menuList=document.getElementById("menu-ul")
const menuClose=document.getElementById("menu-close")

menu.addEventListener('click',function(){
    menuList.classList.toggle('hide');
    menuClose.style.display='block';
})

menuClose.addEventListener('click',function(){
    menuList.classList.toggle('hide');
    menuClose.style.display='none';
})
