function NotFoundPage() {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="/">
                <img 
                  className="header__logo" 
                  src="img/logo.svg" 
                  alt="6 cities logo" 
                  width="81" 
                  height="41"
                />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main">
        <div className="container">
          <section style={{textAlign: 'center', padding: '100px 0'}}>
            <h1>404 - Страница не найдена</h1>
            <p>Запрашиваемая страница не существует.</p>
          </section>
        </div>
      </main>
    </div>
  );
}

export { NotFoundPage };