import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/auth/login/Login';
import Register from '../components/auth/register/Register';
import LandingPage from '../components/pages/LandingPage';

const router = createBrowserRouter([

    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/',
        element: <LandingPage />
    },
    {
        path: '/landingpage',
        element: <LandingPage />   
    }

])

export default router;