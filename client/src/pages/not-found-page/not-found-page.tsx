import { Link } from "react-router-dom";
import { Logo } from "../../components/logo/logo";
import { AppRoute } from "../../const";

function NotFoundPage() {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main">
        <div className="container">
          <section style={{textAlign: 'center', padding: '100px 0'}}>
            <h1 style={{fontSize: '48px', marginBottom: '20px'}}>404</h1>
            <h2 style={{marginBottom: '20px'}}>Page Not Found</h2>
            <p style={{marginBottom: '30px'}}>The page you are looking for does not exist.</p>
            <Link to={AppRoute.Main} style={{color: '#4481c3', textDecoration: 'underline'}}>
              Go to main page
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}

export { NotFoundPage };