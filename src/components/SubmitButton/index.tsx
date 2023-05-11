import { SubmitBtnStyles } from "./styles"
import ButtonImg from '../../assets/img/icon-arrow.svg';
import { useContext } from "react";
import { AppContext } from "../../context/AgeContext";

const SubmitButton = () => {

  const { handleSubmit } = useContext(AppContext);

  return (
    <SubmitBtnStyles onClick={handleSubmit}>
      <img src={ButtonImg} alt="" />
    </SubmitBtnStyles>
  )
}

export default SubmitButton