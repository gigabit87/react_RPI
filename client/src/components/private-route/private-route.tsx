import { Navigate } from "react-router-dom";
import { PropsWithChildren } from "react";
import { AppRoute, AutorizationStatus } from "../../const";
import { useAppSelector } from "../../store/hooks";

function PrivateRoute({ children }: PropsWithChildren) {
    const { authorizationStatus } = useAppSelector((state) => state.user);

    return (
        authorizationStatus === AutorizationStatus.Auth
            ? <>{children}</>
            : <Navigate to={AppRoute.Login} />
    );
}

export {PrivateRoute}