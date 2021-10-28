import welcome from './components/welcome'
import {HashRouter,Route,Switch} from 'react-router-dom'

const App = ()=>{
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={welcome}></Route>
      </Switch>
    </HashRouter>
  )
}

export default App