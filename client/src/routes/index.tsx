import { FC, Fragment, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home
    = lazy(() => import("../pages/Home"));

const SignUp = lazy(() => import("../pages/SignUp"));

const ApplicationRoutes: FC = () => {
    return (

        <Fragment>
            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </Suspense>
        </Fragment>
    );
};


export default ApplicationRoutes;