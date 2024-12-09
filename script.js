//adiciona Tafera ao clicar
const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener("click", function(e) {

    e.preventDefault();
    addTask()

});

//Adiciona a Tarefa no HTML depois de clicar
function addTask() {

    const taskTitle = document.querySelector("#ilistTaref").value;
    const ul = document.querySelector("ul");
    const li = document.querySelector(".task-box");
    
    const newLi = li.cloneNode(true);

    newLi.classList.remove("hide")
    newLi.querySelector("#title").textContent = taskTitle;
    ul.appendChild(newLi);

    //pegando o elemento e adicionando o evento click para o remove
    const removeBtn = newLi.querySelector("#cancel");

    removeBtn.addEventListener("click", function() {
        removeLi(this);
    });

    //pegando o elemento e adicionando o evento click para o check
    const checkBtn = newLi.querySelector("#check_circle").addEventListener("click", function() {
        taskConcluida(this);
    });

    document.querySelector("#ilistTaref").value = "";
};



function removeLi(task) {
    task.parentNode.remove(true);
};

function taskConcluida(task) {
    task.parentNode.classList = 'task-box done';
};





