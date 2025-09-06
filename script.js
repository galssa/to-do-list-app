const input = document.getElementById('input');
const btn = document.getElementById('btn');
const tasks = document.getElementById('tasks');

const inputFunc = () => {
    console.log(input.value.trim())
    if (input.value.trim() != '') {
        // ADD New Task
        let newTask = document.createElement('div');
        tasks.append(newTask);
        newTask.classList.add('task');
        newTask.innerText = input.value

        // ADD Delete Button inside New Task
        let deleteBtn = document.createElement('div');
        deleteBtn.classList.add('delete-btn');
        newTask.append(deleteBtn);
        deleteBtn.innerText = 'Delete';

        // ADD Event Listener on Delete Btn
        deleteBtn.addEventListener('click', () => {
            newTask.remove();
        })

        // Empty the value of input text at last
        input.value = '';
    }
}
btn.addEventListener('click', inputFunc)
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === 'Tab') {
        inputFunc()
        localStorage.setItem("savedInput", '');
    }
});
// Save on input change
input.addEventListener("input", () => {
    localStorage.setItem("savedInput", input.value);
});
// Load saved value
input.value = localStorage.getItem("savedInput") || "";
