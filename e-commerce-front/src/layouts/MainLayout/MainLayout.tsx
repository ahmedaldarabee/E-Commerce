/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container } from "react-bootstrap"
import styles from "./styles.module.css"
import {Header,Footer} from "@components/common";
import { Outlet } from "react-router-dom";

const { container,wrapper }  = styles;

const MainLayout = () => {
    return (
        <Container className={container}>
            <Header />
                <div className={wrapper}>
                    <Outlet/>
                </div>
            <Footer />
        </Container>
    )
}

export default MainLayout