const App = {
    data() {
        return {
            // содержимое приводиться к строке
            counter: 0,
            title: 'Счетчик'
        }
    }
}

// Принимает объект
const app = Vue.createApp(App).mount('#app')

// app.mount('#app') // css селектор корневого узла