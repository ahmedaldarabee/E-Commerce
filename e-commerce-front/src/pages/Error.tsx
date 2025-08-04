import { LottieHandler } from "@components/feedback"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const Error = () => {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            
            <LottieHandler type="notFound" />
            <Link to="/" replace={true} className="backToHome">
                back to home!
            </Link>
        </Container>
    )
}

export default Error
