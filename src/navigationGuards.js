import store  from './store';
import { useRouter } from 'vue-router';

export function requireAuth(to, from, next) {
    const router = useRouter();

    if (to.meta.requiresAuth) {
        if (store.state.isAuthenticated) {
            // Пользователь авторизован, разрешаем навигацию
            next();
        } else {
            // Пользователь не авторизован, перенаправляем на страницу входа
            next('/login');
        }
    } else {
        // Маршрут не требует аутентификации, разрешаем навигацию
        next();
    }
}
