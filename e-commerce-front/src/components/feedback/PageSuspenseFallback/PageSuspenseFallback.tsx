import { Suspense } from "react"
import LottieHandler from "../Lottie/LottieHandler"

interface PageSuspenseFallbackProps {
    children: React.ReactNode
}

const PageSuspenseFallback = ({children}: PageSuspenseFallbackProps) => {
    return (
        <Suspense fallback={ <LottieHandler type="Loading" message="loading home page, please wait..."/>}> 
            {children}
        </Suspense>
    )
}

export default PageSuspenseFallback