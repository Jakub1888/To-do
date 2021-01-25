

Vue.createApp({
    data() {
        return {
            title: 'Your To-Do List',
            newTodo: '',
            todos: [],
            
        };
    },
    
    methods: {
        //add list item
        addTodo() {
            if ( !this.newTodo ) return;

            this.todos.push({
                title: this.newTodo,
                done: false
            });
            this.newTodo = '';
            this.$refs.new.focus();
        },
        //remove list item
        remove(todo) {
            this.todos = this.todos.filter((item) => item !== todo);
        },
        //everything on list compelted
        allDone() {
            this.todos.forEach(todo => {
                todo.done = true;
            });
        },
        //clear input
        clear() {
            this.newTodo= '';
        }
        
    },
}).mount("#app");

