import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const MainLayout = lazy(() => import("@layouts/MainLayout/MainLayout"));
const Home       = lazy(() => import("@pages/Home"));
const Wishlist   = lazy(() => import("@pages/Wishlist"));
const Categories = lazy(() => import("@pages/Categories"));

const Cart       = lazy(() => import("@pages/Cart"));
const Products   = lazy(() => import("@pages/Products"));
const About      = lazy(() => import("@pages/About"));

const Login      = lazy(() => import("@pages/Login"));
const Register   = lazy(() => import("@pages/Register"));
const Error      = lazy(() => import("@pages/Error"));

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback="loading main page, please wait...">
                <MainLayout/>
            </Suspense>
        ),
        errorElement:<Error />,
        children: [
            {
                index:true,
                element: (
                    <Suspense fallback="loading home page, please wait...">
                        <Home />
                    </Suspense>
                )
            },{
                path:"/categories",
                element:  (
                    <Suspense fallback="loading categories page, please wait...">
                        <Categories/>
                    </Suspense>
                ) 
            },{
                path:"/categories/products/:prefix",
                element: (
                    <Suspense fallback="loading products page, please wait...">
                        <Products />
                    </Suspense>
                )  ,
                loader: ({params}) => {
                    if(typeof params.prefix !== "string" || !/^[a-z]+$/gi.test(params.prefix)){
                        throw new Response("Bad Request",{ 
                                statusText:"This Category Not Found!", status:400 
                        })
                    }
                    return true;
                }
            },{
                path: "/about",
                element: (
                    <Suspense fallback="loading about page, please wait...">
                        <About/>
                    </Suspense>
                )  
            },{
                path: "/login",
                element: (
                    <Suspense fallback="loading login page, please wait...">
                        <Login />
                    </Suspense>
                )  
            },{
                path: "/register",
                element: (
                    <Suspense fallback="loading register page, please wait...">
                        <Register />
                    </Suspense>
                )  
            },{
                path: "/cart",
                element: (
                    <Suspense fallback="loading cart page, please wait...">
                        <Cart />
                    </Suspense>
                )
            },{
                path: "/wishlist",
                element: (
                    <Suspense fallback="loading wishlist page, please wait...">
                        <Wishlist />
                    </Suspense>
                )
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