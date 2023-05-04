import GlobalStyles from './styles/global';
import UserBirthday from './components/UserBirthday/index';
import AgeCalculator from './components/AgeCalculator/index';
import { differenceInYears, differenceInCalendarMonths, differenceInCalendarDays } from 'date-fns';
import { useState } from "react";

function App() {

  const [day, setDay] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<number>(0);
  const [age, setAge] = useState<{ years: number, months: number, days: number }>({ years: 0, months: 0, days: 0 });

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    const birthdate = new Date(year, month - 1, day);
    const today = new Date();

    const ageInYears = differenceInYears(today, birthdate);

    const ageInMonths = differenceInCalendarMonths(today, birthdate);
    const months = ageInMonths % 12;

    const ageInDays = differenceInCalendarDays(today, birthdate);
    const days = ageInDays % 30;

    setAge({ years: ageInYears, months: months, days: days });
    
  }

  const handleChangeDay = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDay(parseInt(e.target.value))
  }

  const handleChangeMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(parseInt(e.target.value))
  }

  const handleChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(parseInt(e.target.value))
  }

  return (
    <div className="App">
      <div className="app-content">
        <UserBirthday 
          handleSubmit={handleSubmit}
          handleChangeDay={handleChangeDay}
          handleChangeMonth={handleChangeMonth}
          handleChangeYear={handleChangeYear}
        />
        <AgeCalculator 
          years={age.years}
          months={age.months}
          days={age.days}
        />
        <GlobalStyles />
      </div>
    </div>
  )
}

export default App
