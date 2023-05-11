import { useContext } from "react";
import { AppContext } from "../../context/AgeContext";
import { InputStyles } from "./styles";

interface FieldProps {
  id: number;
  label: string;
  placeholder: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
  errorMessage: string;
  emptyMessage: string;
}

interface Props {
  field: FieldProps
}

const Input: React.FC<Props> = ({ field }) => {

  const { formSubmitted } = useContext(AppContext);

  const { label, placeholder, value, onChange, isValid, errorMessage, emptyMessage } = field;

  return (
    <InputStyles>
      <label className={`${formSubmitted && (value === 0 || !isValid) ? 'label-error' : ''}`}>
        {label}
      </label>
      <input 
        placeholder={placeholder} 
        type="number"
        className={`${formSubmitted && (value === 0 || !isValid) ? 'input-error' : ''}`}
        onChange={onChange}
      />
      {formSubmitted && value === 0 &&
        <span className='span-error'>{emptyMessage}</span>
      }
      {formSubmitted && !isValid &&
        <span className='span-error'>{errorMessage}</span>
      }
    </InputStyles>
  )
}

export default Input