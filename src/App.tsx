import GlobalStyles from './styles/global';
import UserBirthday from './components/UserBirthday/index';

function App() {

  return (
    <div className="App">
      <div className="app-content">
        <UserBirthday />
        <GlobalStyles />
      </div>
    </div>
  )
}

export default App
