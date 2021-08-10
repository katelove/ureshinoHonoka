//打開menu 選單
const menu=document.getElementById('menu-point')
const menuList=document.getElementById("menu-ul")

menu.addEventListener('click',function(){
    menuList.classList.toggle('hide')
})