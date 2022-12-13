// const items=document.querySelectorAll('li');
// items[2].style.backgroundColor='green'
// items[0].style.fontWeight='bold'
// items[1].style.fontWeight='bold'
// items[2].style.fontWeight='bold'
// items[3].style.fontWeight='bold'

// const li=document.getElementsByTagName('li')
// li[4].style.backgroundColor='gray'
// li[1].style.backgroundColor='green'
// li[2].style.display='none'
// const list=document.getElementsByClassName('tem')
// console.log(list)
// list[0].style.color='red'

const items=document.querySelectorAll('li')
items[1].style.color='Green'
const items_2=document.querySelectorAll('li:nth-child(odd)')
items_2.forEach((element)=>{
    element.style.background='#a7fc08'
})

