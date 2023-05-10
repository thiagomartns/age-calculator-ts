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
      isValid: isValidDay,
      errorMessage: 'Must be a valid date',
      emptyMessage: 'This field is required'
    },
    {
      label: "month",
      placeholder: "mm",
      value: month,
      onChange: handleChangeMonth,
      isValid: isValidMonth,
      errorMessage: 'Must be a valid date',
      emptyMessage: 'This field is required'
    },
    {
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
        <div className="input-container" key={index}>
          <label className={`${formSubmitted && (field.value === 0 || !field.isValid) ? 'label-error' : ''}`}>{field.label}</label>
          <input 
          placeholder={field.placeholder} 
          type="number"
          className={`${formSubmitted && (field.value === 0 || !field.isValid) ? 'input-error' : ''}`}
          onChange={field.onChange}
        />
        {formSubmitted && field.value === 0 &&
          <span className='span-error'>{field.emptyMessage}</span>
        }
        {formSubmitted && !field.isValid &&
          <span className='span-error'>{field.errorMessage}</span>
        }
        </div>
      ))}
    </InputFieldContainer>
  )
}

export default index