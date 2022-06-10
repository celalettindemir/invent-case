import { Provider } from 'react-redux'
import { store } from './services/store'
import Router from './routes'
import { searchAction, useAppSelector } from './services';
import filterAction from './services/actions/movies/filterAction';


store.dispatch(filterAction(store.getState().filter));
const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App