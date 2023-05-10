import { UserBirthdayContainer } from "./styles";
import ButtonImg from '../../assets/img/icon-arrow.svg'
import { useContext } from 'react';
import { AppContext } from '../../context/AgeContext'

const index = () => {

  const { 
    handleSubmit, 
    handleChangeDay, 
    handleChangeMonth, 
    handleChangeYear, 
    day, 
    month, 
    year, 
    formSubmitted, 
    isValidDay,
    isValidMonth,
    isValidYear
  } = useContext(AppContext)

  return (
    <UserBirthdayContainer>
      <form className="user-form" onSubmit={handleSubmit}>
        <div className="form-content">
          <div className="input-container">
            <label className={`${formSubmitted && (day === 0 || !isValidDay) ? 'label-error' : ''}`}>day</label>
            <input 
              placeholder="dd" 
              type="number" 
              className={`${formSubmitted && (day === 0 || !isValidDay) ? 'input-error' : ''}`}
              onChange={handleChangeDay}
            />
            {formSubmitted && day === 0 &&
              <>
                <span className='span-error'>This field is required</span>
              </>
            }
            {formSubmitted && !isValidDay &&
              <>
                <span className='span-error'>Must be a valid date</span>
              </>
            }
          </div>
          <div className="input-container">
            <label className={`${formSubmitted && (month === 0 || !isValidMonth) ? 'label-error' : ''}`}>month</label>
            <input 
              placeholder="mm" 
              type="number" 
              className={`${formSubmitted && (month === 0 || !isValidMonth) ? 'input-error' : ''}`}
              onChange={handleChangeMonth}
            />
            {formSubmitted && month === 0 &&
              <>
                <span className='span-error'>This field is required</span>
              </>
            }
            {formSubmitted && !isValidMonth &&
              <>
                <span className='span-error'>Must be a valid month</span>
              </>
            }
          </div>
          <div className="input-container">
            <label className={`${formSubmitted && (year === 0 || !isValidYear) ? 'label-error' : ''}`}>year</label>
            <input 
              placeholder="yyyy" 
              type="number" 
              className={`${formSubmitted && (year === 0 || !isValidYear) ? 'input-error' : ''}`}
              onChange={handleChangeYear}
            />
            {formSubmitted && year === 0 &&
              <>
                <span className='span-error'>This field is required</span>
              </>
            }
            {formSubmitted && !isValidYear &&
              <>
                <span className='span-error'>Must be in the past</span>
              </>
            }
          </div>
        </div>
        <button className="submit-btn btn" onClick={handleSubmit}>
          <img src={ButtonImg} alt="" />
        </button>
      </form>
    </UserBirthdayContainer>
  )
}

export default index