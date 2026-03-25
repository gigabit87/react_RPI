import { JSX } from 'react';

function LoadingPage(): JSX.Element {
  return (
    <div className="page page--gray page--main" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="spinner">
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Loading...</p>
        <style>{`
          .spinner {
            text-align: center;
            animation: pulse 1.5s infinite ease-in-out;
          }
          @keyframes pulse {
            0% { opacity: 0.4; }
            50% { opacity: 1; }
            100% { opacity: 0.4; }
          }
        `}</style>
      </div>
    </div>
  );
}

export { LoadingPage };