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

const index: React.FC<Props> = ({ field }) => {

  const { formSubmitted } = useContext(AppContext);

  return (
    <InputStyles>
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
    </InputStyles>
  )
}

export default index