import { UserBirthdayContainer } from "./styles";
import ButtonImg from '../../assets/img/icon-arrow.svg'
import { useContext } from 'react';
import { AppContext } from '../../context/AgeContext';
import Inputs from '../InputsContainer/index';

const index = () => {

  const { 
    handleSubmit, 
  } = useContext(AppContext)

  return (
    <UserBirthdayContainer>
      <form className="user-form" onSubmit={handleSubmit}>
        <Inputs />
        <button className="submit-btn btn" onClick={handleSubmit}>
          <img src={ButtonImg} alt="" />
        </button>
      </form>
    </UserBirthdayContainer>
  )
}

export default index