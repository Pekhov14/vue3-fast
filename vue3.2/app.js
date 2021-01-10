const App = {
    data() {
        return {
            placeholderString: 'Название заметочки',
            title: 'Заметочки',
            inputValue
            notes: [
                'Заметочка 1',
                'Заметочка 2'
            ]
        }
    },
    methods: {
        // inputChangeHandler(event) {
        //     this.inputValue = event.target.value
        // },
        addNewNote() {
            if(this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        // doubleCount() {
        //   вызываеться при обращении
        //   return this.notes.length * 2
        // },
        removeFromNotes(id) {
            this.notes.splice(id, 1)
        }
        // inputKeyPress(event) {
        //     if (event.key === 'Enter') {
        //         this.addNewNote()
        //     }
        // }
    },
    computed: {
        doubleCountComputed() {
            // Будет вызван при изменении notes, оптемизация
            return this.notes.length * 2
        }
    },
    watch: {
    //    Следим за изменниями переменных (нужных нам)
        inputValue(value) {
            if (value.length > 10) {
                this.inputValue = ''
            }
        }
    }
}

// Принимает объект
const app = Vue.createApp(App).mount('#app')

// app.mount('#app') // css селектор корневого узла