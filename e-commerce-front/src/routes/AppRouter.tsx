import MainLayout from '@layouts/MainLayout/MainLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@pages/Home';
import Categories from '@pages/Categories';
import Products from '@pages/Products';
import About from '@pages/About';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index:true,
                element: <Home />
            },{
                path:"categories",
                element: <Categories/>
            },{
                path:"products/:prefix",
                element: <Products />
            },{
                path: "about",
                element: <About/>
            }
        ]
    }
])

const AppRouter = () => {
    return (
        <RouterProvider router={router}/>
    )
}

export default AppRouter