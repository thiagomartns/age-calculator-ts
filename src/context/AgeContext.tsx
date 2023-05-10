import React, { createContext, useState } from 'react';
import { differenceInYears, differenceInCalendarMonths, differenceInCalendarDays, getDaysInMonth } from 'date-fns';

interface BirthdayProps {
  years: number,
  months: number,
  days: number
}

interface AppContextType {
  handleSubmit: (e: React.FormEvent<HTMLElement>) => void;
  handleChangeDay: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeMonth: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeYear: (e: React.ChangeEvent<HTMLInputElement>) => void;
  age: BirthdayProps;
  day: number;
  month: number;
  year: number;
  setDay: React.Dispatch<React.SetStateAction<number>>;
  setMonth: React.Dispatch<React.SetStateAction<number>>;
  setYear: React.Dispatch<React.SetStateAction<number>>;
  setAge: React.Dispatch<React.SetStateAction<BirthdayProps>>;
  formSubmitted: boolean;
  isValidDay: boolean;
  isValidMonth: boolean;
  isValidYear: boolean;
}


interface Props {
  children: React.ReactNode;
}

export const AppContext = createContext<AppContextType>({
  handleSubmit: () => {},
  handleChangeDay: () => {},
  handleChangeMonth: () => {},
  handleChangeYear: () => {},
  day: 0,
  month: 0,
  year: 0,
  age: { years: 0, months: 0, days: 0 },
  setDay: () => {},
  setMonth: () => {},
  setYear: () => {},
  setAge: () => {},
  formSubmitted: false,
  isValidDay: true,
  isValidMonth: true,
  isValidYear: true
});

const AppProvider: React.FC<Props> = ({ children }) => {
  const [day, setDay] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<number>(0);
  const [age, setAge] = useState<{ years: number, months: number, days: number }>({ years: 0, months: 0, days: 0 });
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [isValidDay, setIsValidDay]  = useState<boolean>(true);
  const [isValidMonth, setIsValidMonth]  = useState<boolean>(true);
  const [isValidYear, setIsValidYear]  = useState<boolean>(true);

  const birthdate = new Date(year, month - 1, day);
  const today = new Date();

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    setFormSubmitted(true);

    if (!day || !month || !year) {
      setAge({ years: 0, months: 0, days: 0 });
      return;
    }
    
    const birthMonth = birthdate.getMonth();
    const birthDay = birthdate.getDate();

    const hasPassedBirthday = (today.getMonth() > birthMonth) || 
    (today.getMonth() === birthMonth && today.getDate() >= birthDay);

    const lastBirthdayYear = hasPassedBirthday ? today.getFullYear() : today.getFullYear() - 1;
    const lastBirthday = new Date(lastBirthdayYear, birthMonth, birthDay);

    const ageInYears = differenceInYears(today, birthdate);

    const ageInMonths = differenceInCalendarMonths(today, birthdate);
    let months = ageInMonths % 12;

    const lastDayBirthday = new Date(today.getFullYear(), today.getMonth() - 1, day)
    let ageInDays = differenceInCalendarDays(today, lastDayBirthday);

    if (ageInDays === getDaysInMonth(today) - 1) {
      ageInDays = 0
    }

    while (ageInDays > 30) {
      ageInDays -= 30;
    }

    setAge({ years: ageInYears, months: months, days: ageInDays });

    if (!isValidDay || !isValidMonth || !isValidYear) {
      setAge({ years: 0, months: 0, days: 0 });
    }
    
  }

  const handleChangeDay = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dayValue = parseInt(e.target.value);
    const isValid = /^[1-9]$|^[1-2][0-9]$|^3[0-1]$/.test(dayValue.toString());
  
    setIsValidDay(isValid);
    setDay(dayValue);
  }

  const handleChangeMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const monthValue = parseInt(e.target.value);
    const isValid = monthValue <= 12;
  
    setIsValidMonth(isValid);
    setMonth(monthValue);
  }

  const handleChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    const yearValue = parseInt(e.target.value);
    const isValid = yearValue <= today.getFullYear();
  
    setIsValidYear(isValid);
    setYear(yearValue);
  }

  const contextValue = {
    day,
    setDay,
    month,
    setMonth,
    year,
    setYear,
    age,
    handleSubmit,
    handleChangeDay,
    handleChangeMonth,
    handleChangeYear,
    setAge,
    formSubmitted,
    isValidDay,
    isValidMonth, 
    isValidYear
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
