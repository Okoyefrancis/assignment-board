import AssignmentBoard from './StudentAssignment/AssignmentBoard'
import { Provider, } from "react-redux"
import { store } from './global/store'
const App = () => {

  return (
    <div>
      <Provider store={store}>
        <AssignmentBoard />
      </Provider>
    </div>
  )
}

export default App