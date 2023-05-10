import { useContext } from "react"
import { InputFieldContainer } from "./styles"
import { AppContext } from "../../context/AgeContext"
import Input from '../Input/index'

const index = () => {

  const {
    handleChangeDay, 
    handleChangeMonth, 
    handleChangeYear, 
    day, 
    month, 
    year, 
    isValidDay,
    isValidMonth,
    isValidYear,
  } = useContext(AppContext);

  const fields = [
    {
      id: 1,
      label: "day",
      placeholder: "dd",
      value: day,
      onChange: handleChangeDay,
      isValid: isValidDay,
      errorMessage: 'Must be a valid date',
      emptyMessage: 'This field is required'
    },
    {
      id: 2,
      label: "month",
      placeholder: "mm",
      value: month,
      onChange: handleChangeMonth,
      isValid: isValidMonth,
      errorMessage: 'Must be a valid date',
      emptyMessage: 'This field is required'
    },
    {
      id: 3,
      label: "year",
      placeholder: "yyyy",
      value: year,
      onChange: handleChangeYear,
      isValid: isValidYear,
      errorMessage: 'Must be in the past',
      emptyMessage: 'This field is required'
    }
  ];

  return (
    <InputFieldContainer>
      {fields.map((field, index) => (
        <Input field={field} key={index} />
      ))}
    </InputFieldContainer>
  )
}

export default index