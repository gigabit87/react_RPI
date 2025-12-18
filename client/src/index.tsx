import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './components/app/app'
import { store } from './store'
import { Setting } from './const'
import { offers } from './mocks/offers'
import { offersList } from './mocks/offers-list'
import { offersCityList } from './store/action'

store.dispatch(offersCityList(offersList))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App 
      offers={offers}
        offersList={offersList}
    />
    </Provider>
  </React.StrictMode>
)
