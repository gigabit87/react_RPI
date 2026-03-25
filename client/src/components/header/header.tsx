import { JSX } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../logo/logo";
import { AppRoute, AuthorizationStatus } from "../../const";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { logoutAction } from "../../store/api-action";

function Header(): JSX.Element {
    const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
    const offers = useAppSelector((state) => state.offers || []);
    const userEmail = useAppSelector((state) => state.email);
    const userUsername = useAppSelector((state) => state.username);
    const userAvatarUrl = useAppSelector((state) => state.avatarUrl);
    const dispatch = useAppDispatch();
    
    const favoriteCount = offers.filter((offer) => offer.isFavorite).length;
    const isAuth = authorizationStatus === AuthorizationStatus.Auth;

    const handleSignOut = () => {
        dispatch(logoutAction());
    };

    // Формируем полный URL аватара
    const getAvatarUrl = () => {
        if (userAvatarUrl) {
            if (userAvatarUrl.startsWith('http')) {
                return userAvatarUrl;
            }
            return `http://localhost:5000${userAvatarUrl}`;
        }
        return '/img/avatar.svg';
    };

    // Отображаемое имя: username или email или "User"
    const displayName = userUsername || userEmail || 'User';

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__left">
                        <Logo />
                    </div>
                    <nav className="header__nav">
                      <ul className="header__nav-list">
                        {isAuth ? (
                          <>
                            <li className="header__nav-item user">
                              <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favourites}>
                                <div className="header__avatar-wrapper user__avatar-wrapper">
                                  <img
                                    className="header__avatar user__avatar"
                                    src={getAvatarUrl()}
                                    alt="User avatar"
                                    width="20"
                                    height="20"
                                  />
                                </div>
                                <span className="header__user-name user__name">{displayName}</span>
                                {favoriteCount > 0 && (
                                  <span className="header__favorite-count">{favoriteCount}</span>
                                )}
                              </Link>
                            </li>
                            <li className="header__nav-item">
                              <Link 
                                className="header__nav-link" 
                                to="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleSignOut();
                                }}
                              >
                                <span className="header__signout">Sign out</span>
                              </Link>
                            </li>
                          </>
                        ) : (
                          <li className="header__nav-item user">
                            <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                              <span className="header__login">Sign in</span>
                            </Link>
                          </li>
                        )}
                      </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export { Header };