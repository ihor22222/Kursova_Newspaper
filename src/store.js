import { createStore } from 'vuex';

const store = createStore({
    state: {
        isAuthenticated: false, // Ваше состояние аутентификации
        // другие состояния
    },
    mutations: {
        // мутации для изменения состояния
    },
    actions: {
        // действия для выполнения асинхронных операций
    },
    getters: {
        // геттеры для получения данных из состояния
    },
});

export default store;
