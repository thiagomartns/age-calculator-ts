import { AgeCalculatorContainer } from "./styles"

interface BirthdayProps {
  years: number,
  months: number,
  days: number
}

const index: React.FC<BirthdayProps> = ({ years, months, days }) => {

  return (
    <AgeCalculatorContainer>
      {years > 0 &&
        <>
          <h1>{years} <span>years</span></h1>
          <h1>{months} <span>months</span></h1>
          <h1>{days} <span>days</span></h1>
        </>
      }
      {!years &&
        <>
          <h1>-- <span>years</span></h1>
          <h1>-- <span>months</span></h1>
          <h1>-- <span>days</span></h1>
        </>
      }
    </AgeCalculatorContainer>
  )
}

export default index