import { UserBirthdayContainer } from "./styles";
import ButtonImg from '../../assets/img/icon-arrow.svg'

interface AgeProps {
  handleSubmit: (e: React.FormEvent<HTMLElement>) => void;
  handleChangeDay: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeMonth: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeYear: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const index: React.FC<AgeProps> = ({ handleSubmit, handleChangeDay, handleChangeMonth, handleChangeYear }) => {

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