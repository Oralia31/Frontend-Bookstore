import LogInPage from './pages/login'
import LogOutPage from './pages/logout'


export const LoginRoutes= [
    {
        path: '/login',
        name: 'login',
        component: LogInPage
    },

    {
        path: '/logout',
        name: 'logout',
        component: LogOutPage
    }
]