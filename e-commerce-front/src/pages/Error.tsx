import { Container } from "react-bootstrap"
import { isRouteErrorResponse, NavLink, useRouteError } from "react-router-dom"

const Error = () => {

    const mainError = useRouteError();
    let errorStatus: number;
    let errorMessage: string;

    if(isRouteErrorResponse(mainError)){
        errorStatus = mainError.status;
        errorMessage = mainError.statusText;
    }else{
        errorStatus = 404;
        errorMessage = "Page Not Found!";
    }


    return (
        <Container className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <img
                width={400}
                height={400}
                src="/Error-Img.png"
                alt="Error Image"
                className="img-fluid"
            />
            <div className="my-3 text-center">
                <h3>{errorStatus}</h3>
                <p>{errorMessage}</p>
            </div>
            <NavLink replace={true} to="/" className="backToHome">back to home!</NavLink>
        </Container>
    )
}

export default Error
