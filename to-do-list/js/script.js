document.addEventListener('DOMContentLoaded', function () {
    new Vue({
      el: '#app',
      data: {
            toDoList: [
                { text: 'Tarefa 01', completed: false },
                { text: 'Tarefa 02', completed: true }
            ],
            toDo: ''
        },
        methods: {
            save() {
                this.toDoList.push({text: this.toDo, completed: false})
            }
        }
    })
})
