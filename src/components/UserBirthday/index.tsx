import { UserBirthdayContainer } from "./styles";
import ButtonImg from '../../assets/img/icon-arrow.svg'

interface AgeProps {
  handleSubmit: (e: React.FormEvent<HTMLElement>) => void;
  handleChangeDay: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeMonth: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeYear: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface InputDetailProps {
  placeholder: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  id: number;
}

const index: React.FC<AgeProps> = ({ handleSubmit, handleChangeDay, handleChangeMonth, handleChangeYear }) => {

  const InputDetails: InputDetailProps[] = [
    {
      placeholder: 'dd',
      type: 'number',
      onChange: handleChangeDay,
      label: 'day',
      id: 1
    },
    {
      placeholder: 'mm',
      type: 'number',
      onChange: handleChangeMonth,
      label: 'month',
      id: 2
    },
    {
      placeholder: 'yyyy',
      type: 'number',
      onChange: handleChangeYear,
      label: 'year',
      id: 3
    }
  ]

  return (
    <UserBirthdayContainer>
      <form className="user-form" onSubmit={handleSubmit}>
        <div className="form-content">
          {InputDetails.map((inputDetail, index) => (
            <div className="input-container" key={index}>
              <label>{inputDetail.label}</label>
              <input 
                placeholder={inputDetail.placeholder}
                type={inputDetail.type}
                onChange={inputDetail.onChange}
              />
            </div>
          ))}
        </div>
        <button className="submit-btn btn" onClick={handleSubmit}>
          <img src={ButtonImg} alt="" />
        </button>
      </form>
    </UserBirthdayContainer>
  )
}

export default index