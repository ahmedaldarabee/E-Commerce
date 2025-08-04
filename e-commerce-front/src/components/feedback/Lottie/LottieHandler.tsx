import Lottie from "lottie-react";
import notFound from '@assets/erroranimation/notFound 404.json'
import empty from "@assets/erroranimation/Empty.json"
import Loading from "@assets/erroranimation/Loading.json"
import Error from '@assets/erroranimation/Error.json'
import InitLoading from '@assets/erroranimation/initLoading.json'
// Feedback Folder -> components that be as : same visibility of system status idea in GUI

const LottieMap = {
    notFound,
    empty,
    Loading,
    Error,
    InitLoading
}

type TLottieHandlerProps = {
    type: keyof typeof LottieMap,
    message?: string
}

const LottieHandler = ({type,message}: TLottieHandlerProps) => {
    const lottie = LottieMap[type];

    return (
        <div className="d-flex flex-column align-items-center gap-3">
            <Lottie
                style={{width:"400px",marginBottom:"30px"}}
                animationData={lottie}/>
            {message && <h3 style={{fontSize:"26px"}}>{message}</h3>}
        </div>
    )
}

export default LottieHandler