document.addEventListener('DOMContentLoaded', function () {
    new Vue({
      el: '#app',
      data: {
          errorMessage: null,
            toDoList: [
                { text: 'Tarefa 01', completed: false },
                { text: 'Tarefa 02', completed: true }
            ],
            toDo: ''
        },
        methods: {
            save() {
                this.errorMessage = null
                if (!this.toDo) {
                    this.errorMessage = 'Digite o texto da tarefa!'
                    return
                }
                this.toDoList.push({text: this.toDo, completed: false})
                this.toDo = ''
            }
        }
    })
})
