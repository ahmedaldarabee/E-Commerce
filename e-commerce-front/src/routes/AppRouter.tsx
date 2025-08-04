import { LottieHandler, PageSuspenseFallback } from '@components/feedback';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// layout
const MainLayout = lazy(() => import("@layouts/MainLayout/MainLayout"));

// pages
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
            <div className='w-100 min-vh-100 d-flex justify-content-center align-items-sm-center'>
                <Suspense
                    fallback={<LottieHandler type='InitLoading' message="loading main page, please wait..."/>}
                    >
                    <MainLayout/>
                </Suspense>
            </div>
        ),
        errorElement:<Error />,
        children: [
            {
                index:true,
                element: (
                    <PageSuspenseFallback>
                        <Home />
                    </PageSuspenseFallback>
                )
            },{
                path:"/categories",
                element:  (
                    <PageSuspenseFallback>
                        <Categories/>
                    </PageSuspenseFallback>
                ) 
            },{
                path:"/categories/products/:prefix",
                element: (
                    <PageSuspenseFallback>
                        <Products />
                    </PageSuspenseFallback>
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
                    <PageSuspenseFallback>
                        <About/>
                    </PageSuspenseFallback>
                )  
            },{
                path: "/login",
                element: (
                    <PageSuspenseFallback>
                        <Login />
                    </PageSuspenseFallback>
                )  
            },{
                path: "/register",
                element: (
                    <PageSuspenseFallback>
                        <Register />
                    </PageSuspenseFallback>
                )  
            },{
                path: "/cart",
                element: (
                    <PageSuspenseFallback>
                        <Cart />
                    </PageSuspenseFallback>
                )
            },{
                path: "/wishlist",
                element: (
                    <PageSuspenseFallback>
                        <Wishlist />
                    </PageSuspenseFallback>
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