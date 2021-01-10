Vue.createApp({
    // data() {
    //     return {
    //
    //     }
    // }
    // es6 без return
    data: () => ({
        myHtml: '<h1>Vue 3 App</h1>',
        title: 'Я есть Грут',
        person: {
            firstName: 'Anton',
            lastName: 'Pekhov',
            age: 21
        },
        items: [1,2,3,4]
    }),
    methods: {
        addItem() {
            // $ - системные значения
            // v-model для связывания
            // по умолчанию передаеться $event
            this.items.unshift(this.$refs.myInput.value)
            console.log(event.key)
        },
        remove(i) {
            this.items.splice(i, 1)
        },
        log(item) {
            console.log(item)
        }
    },
    computed: {
        evenItems() {
            return this.items.filter(i => i % 2 === 0)
        }
    }
}).mount('#app')