let data = [];
let newDiv = document.querySelector('.newDiv');
const button = document.getElementById('btn');
const inputDiv = document.querySelector('.inputDiv');
const input = document.getElementById('input');


const inputImg = document.querySelector('.input-img')



button.addEventListener('click', function (){
    if(input.value.trim()!=0){
           let localItems = JSON.parse( localStorage.getItem('localItem'))
        if(localItems === null){
             taskList = []
    
        }else{
            taskList = localItems;
        }
        taskList.push(input.value)
        localStorage.setItem('localItem', JSON.stringify(taskList)); 
    }
    
        showItem()
    })
    
    function showItem(){
        let localItems = JSON.parse( localStorage.getItem('localItem'))
        if(localItems === null){
             taskList = []
    
        }else{
            taskList = localItems;
        }
    
    
    let html = '';
    let itemShow = document.querySelector('.newDiv');
    taskList.forEach((data, index )=> {
        
    
        html += `
        <div class="input-div">
        <input class="input-class" type="text" id="newInput" value="${data}" draggable="true" >
        
        <button class="deleteTask" onClick="deleteItem(${index})"><img class="new-input-img" src="img/Group 77.svg" alt=""></button>
        </div>
        `
    })
    itemShow.innerHTML = html;
    }
    showItem()
    
    function deleteItem(index){
        let localItems = JSON.parse( localStorage.getItem('localItem'))
        taskList.splice(index, 1)
        localStorage.setItem('localItem', JSON.stringify(taskList));
        showItem()
    }
    
    inputImg.addEventListener('click',function clearTask(){
        
    localStorage.clear()
    showItem()
    });
