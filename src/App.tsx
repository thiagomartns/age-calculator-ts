import GlobalStyles from './styles/global';
import UserBirthday from './components/UserBirthday/index';
import AgeCalculator from './components/AgeCalculator/index';

function App() {

  return (
    <div className="App">
      <div className="app-content">
        <UserBirthday />
        <AgeCalculator />
        <GlobalStyles />
      </div>
    </div>
  )
}

export default App
