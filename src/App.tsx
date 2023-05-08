import GlobalStyles from './styles/global';
import UserBirthday from './components/UserBirthday/index';
import AgeCalculator from './components/AgeCalculator/index';
import AgeProvider from './context/AgeContext';

function App() {

  return (
    <AgeProvider>
      <div className="App">
        <div className="app-content">
          <UserBirthday />
          <AgeCalculator />
          <GlobalStyles />
        </div>
      </div>
    </AgeProvider>
  )
}

export default App
