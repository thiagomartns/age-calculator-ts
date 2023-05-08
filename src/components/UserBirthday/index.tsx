import { UserBirthdayContainer } from "./styles";
import ButtonImg from '../../assets/img/icon-arrow.svg'
import { useContext } from 'react';
import { AppContext } from '../../context/AgeContext'

const index = () => {

  const { handleSubmit, handleChangeDay, handleChangeMonth, handleChangeYear } = useContext(AppContext)

  return (
    <UserBirthdayContainer>
      <form className="user-form" onSubmit={handleSubmit}>
        <div className="form-content">
          <div className="day input-container">
            <label>day</label>
            <input 
              placeholder="dd" 
              type="number" 
              className="day-input"
              onChange={handleChangeDay}
            />
          </div>
          <div className="month input-container">
            <label>month</label>
            <input 
              placeholder="mm" 
              type="number" 
              className="month-input" 
              onChange={handleChangeMonth}
            />
          </div>
          <div className="year input-container">
            <label>year</label>
            <input 
              placeholder="yyyy" 
              type="number" 
              className="year-input" 
              onChange={handleChangeYear}
            />
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