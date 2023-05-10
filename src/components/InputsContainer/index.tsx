import { useContext } from "react"
import { InputFieldContainer } from "./styles"
import { AppContext } from "../../context/AgeContext"


const index = () => {

  const {
    handleChangeDay, 
    handleChangeMonth, 
    handleChangeYear, 
    day, 
    month, 
    year, 
    formSubmitted, 
    isValidDay,
    isValidMonth,
    isValidYear,
  } = useContext(AppContext);

  const fields = [
    {
      label: "day",
      placeholder: "dd",
      value: day,
      onChange: handleChangeDay,
      isValid: isValidDay
    },
    {
      label: "month",
      placeholder: "mm",
      value: month,
      onChange: handleChangeMonth,
      isValid: isValidMonth
    },
    {
      label: "year",
      placeholder: "yyyy",
      value: year,
      onChange: handleChangeYear,
      isValid: isValidYear
    }
  ];

  return (
    <InputFieldContainer>
      {fields.map((field, index) => (
        <div className="input-container" key={index}>
          <label className={`${formSubmitted && (field.value === 0 || !field.isValid) ? 'label-error' : ''}`}>{field.label}</label>
          <input 
          placeholder={field.placeholder} 
          type="number"
          className={`${formSubmitted && (field.value === 0 || !field.isValid) ? 'input-error' : ''}`}
          onChange={field.onChange}
        />
        </div>
      ))}
    </InputFieldContainer>
  )
}

export default index