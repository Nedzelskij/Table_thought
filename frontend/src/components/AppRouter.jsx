import { Route, Routes, Navigate } from 'react-router-dom';
import {useAuth} from "./AuthProvider";
import Home from "../pages/Home";
import LogIn from "../pages/auth/LogIn";
import SignUp from "../pages/auth/SignUp";
import Games from "../pages/Games";
import GameView from "../pages/GameView";
import GameCreate from "../pages/GameCreate";
import AboutUs from "../pages/AboutUs";

const userRoutes = [
    { path: '/', element: <Home /> },
    { path: '/games', element: <Games /> },
    { path: '/about-us', element: <AboutUs /> },
    { path: '/games/:gameId', element: <GameView /> },
    { path: '/auth/log-in', element: <LogIn /> },
    { path: '/auth/sign-up', element: <SignUp /> },
    { path: '/*', element: <Navigate to={"/"} /> },
];

const adminRoutes = [
    { path: '/games/create', element: <GameCreate /> },
    ...userRoutes,
];

const renderRoutes = (routes) => {
    return routes.map(route => (
        <Route path={route.path} element={route.element} key={route.path} />
    ));
};

const AppRouter = () => {
    const { user } = useAuth();

    return (
        <Routes>
            {user && user.role === "ROLE_ADMIN" ? renderRoutes(adminRoutes) : renderRoutes(userRoutes)}
        </Routes>
    );
};

export default AppRouter;
