import { AppRouter } from "./AppRouter"
import { Provider } from 'react-redux'
import { store } from './modules/store'

export const CMSNoticias = () => {
  return (
    <Provider store={ store } >
      <AppRouter />
    </Provider>
  )
}
