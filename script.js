let taskList = [];
let inputSeach = '';
let task = '';
let textChange;
let newLi;
let i = 0;

function getElements(){
    inputSeach = document.getElementById('taskInput');
    task = document.getElementById('taskList');   
};

function createElements(){
    newLi = document.createElement('li');
    task.appendChild(newLi);
}

function cleanInputList(){
    inputSeach.value = '';
};

function addList(){
    taskList.push('*'+inputSeach.value);
    newLi.innerHTML = taskList[i];
}

function conditionalList(){
    if(inputSeach.value =='' || inputSeach.value == undefined){
        alert('INVALID INPUT')
    }
    else{
        addList()
        cleanInputList() 
    }
}

function main(){
    getElements();
    createElements();
    conditionalList(); 
    i++       
};

function addEnter(event){
    if(event.key === 'Enter'){
       main()
    }
}

function clearTasks(){
    task.innerHTML = ''
    inputSeach.value = '';
}



