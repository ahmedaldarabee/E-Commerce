import MainLayout from '@layouts/MainLayout/MainLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@pages/Home';
import Categories from '@pages/Categories';
import Products from '@pages/Products';
import About from '@pages/About';
import Login from '@pages/Login';
import Register from '@pages/Register';
import Error from '@pages/Error';
import Cart from '@pages/Cart';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement:<Error />,
        children: [
            {
                index:true,
                element: <Home />
            },{
                path:"categories",
                element: <Categories/>
            },{
                path:"/categories/products/:prefix",
                element: <Products />,
                loader: ({params}) => {
                    if(typeof params.prefix !== "string" || !/^[a-z]+$/gi.test(params.prefix)){
                        throw new Response("Bad Request",{ statusText:"This Category Not Found!", status:400 })
                    }
                    return true;
                }
            },{
                path: "about",
                element: <About/>
            },{
                path: "login",
                element: <Login />
            },{
                path: "register",
                element: <Register />
            },{
                path: "cart",
                element: <Cart />
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