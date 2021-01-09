

Vue.createApp({
    data() {
        return {
            title: 'Your To-Do List',
            newTodo: '',
            todos: [],
            
        };
    },
    
    methods: {
        addTodo() {
            this.todos.push({
                title: this.newTodo,
                done: false
            });
            this.newTodo = '';
        },
        removeTodo(todo) {
            const todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex, 1);
        },
        allDone() {
            this.todos.forEach(todo => {
                todo.done = true;
            });
        },
        clear() {
            this.newTodo= '';
        }
        
        
          
        
        
    },
}).mount("#app");