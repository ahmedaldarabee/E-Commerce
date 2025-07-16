import type { TLoading } from "@customTypes/shared"


type LoadingProps = {
    status: TLoading;
    error: null | string;
    children: React.ReactNode;
}

const Loading = ({error, status , children}:LoadingProps) => {
    if(status === "pending"){
        return (
            <p>loading please wait...</p>
        )
    }
    if(status === "failed"){
        return (
            <p>sorry, there are an error where be as: {error}</p>
        )
    }

    return <> {children} </>
}

export default Loading