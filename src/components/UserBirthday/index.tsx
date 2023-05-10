import { UserBirthdayContainer } from "./styles";
import { useContext } from 'react';
import { AppContext } from '../../context/AgeContext';
import Inputs from '../InputsContainer/index';
import SubmitBtn from "../SubmitButton/index";

const index = () => {

  const { 
    handleSubmit
  } = useContext(AppContext)

  return (
    <UserBirthdayContainer>
      <form className="user-form" onSubmit={handleSubmit}>
        <Inputs />
        <SubmitBtn />
      </form>
    </UserBirthdayContainer>
  )
}

export default index