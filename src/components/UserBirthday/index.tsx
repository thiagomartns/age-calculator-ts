import { UserBirthdayContainer } from "./styles";
import ButtonImg from '../../assets/img/icon-arrow.svg'

const index = () => {

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
  }

  return (
    <UserBirthdayContainer>
      <form className="user-form" onSubmit={handleSubmit}>
        <div className="form-content">
          <div className="day input-container">
            <label htmlFor="">day</label>
            <input placeholder="dd" type="number" className="day-input" />
          </div>
          <div className="month input-container">
            <label htmlFor="">month</label>
            <input placeholder="mm" type="number" className="month-input" />
          </div>
          <div className="year input-container">
            <label htmlFor="">year</label>
            <input placeholder="yyyy" type="number" className="year-input" />
          </div>
        </div>
        <button className="submit-btn btn">
          <img src={ButtonImg} alt="" />
        </button>
        <div className="line"></div>
      </form>
    </UserBirthdayContainer>
  )
}

export default index