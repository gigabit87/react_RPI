import { JSX, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/header/header";
import { AppRoute } from "../../const";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { requireAuth, setEmail } from "../../store/slices/user-slice";
import { setSelectedCity } from "../../store/slices/offers-slice";

function LoginPage(): JSX.Element {
    const [email, setEmailValue] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { selectedCity } = useAppSelector((state) => state.offers);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Простая валидация (в реальном приложении здесь был бы API запрос)
        if (email && password) {
            dispatch(requireAuth());
            dispatch(setEmail(email));
            navigate(AppRoute.Main);
        }
    };

    const handleCityClick = (city: string) => {
        dispatch(setSelectedCity(city));
    };

    return( 
    <div className="page page--gray page--login">
      <Header />
    <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input 
                  className="login__input form__input" 
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  required={true}
                  value={email}
                  onChange={(e) => setEmailValue(e.target.value)}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input 
                  className="login__input form__input" 
                  type="password" 
                  name="password" 
                  placeholder="Password" 
                  required={true}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a 
                className="locations__item-link" 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleCityClick('Amsterdam');
                }}
              >
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main></div>)
}

export { LoginPage };