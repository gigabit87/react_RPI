import { JSX } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../logo/logo";
import { AppRoute } from "../../const";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { requireLogout } from "../../store/slices/user-slice";
import { useNavigate } from "react-router-dom";

function Header(): JSX.Element {
    const { authorizationStatus, email } = useAppSelector((state) => state.user);
    const offers = useAppSelector((state) => state.offers);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const favoriteCount = offers ? offers.filter((offer) => offer.isFavorite).length : 0;
    const isAuth = authorizationStatus === 'AUTH';

    const handleSignOut = () => {
        dispatch(requireLogout());
        navigate(AppRoute.Main);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__left">
                        <Logo />
                    </div>
                    <nav className="header__nav">
                      <ul className="header__nav-list">
                        <li className="header__nav-item user">
                          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favourites}>
                            <div className="header__avatar-wrapper user__avatar-wrapper">
                              <img
                                className="header__avatar user__avatar"
                                src="/img/avatar.svg"
                                alt="User avatar"
                              />
                            </div>
                            <span className="header__user-name user__name">{email || 'User'}</span>
                            {favoriteCount > 0 && (
                              <span className="header__favorite-count">{favoriteCount}</span>
                            )}
                          </Link>
                        </li>
                      </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export { Header };

