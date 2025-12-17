import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './components/app/app'
import { store } from './store'
import { Setting } from './const'
import { offers } from './mocks/offers'
import { setOffers } from './store/slices/offers-slice'

// Инициализируем store с моковыми данными
store.dispatch(setOffers(offers))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App 
        rentalOffersCount={Setting.rentOffersCount}
        offers={offers}
      />
    </Provider>
  </React.StrictMode>
)
