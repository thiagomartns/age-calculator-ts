import { AgeCalculatorContainer } from "./styles"

interface BirthdayProps {
  years: number,
  months: number,
  days: number
}

const index: React.FC<BirthdayProps> = ({ years, months, days }) => {

  return (
    <AgeCalculatorContainer>
      <h1>{years ? years : '--'} <span>years</span></h1>
      <h1>{months ? months : '--'} <span>months</span></h1>
      <h1>{days ? days : '--'} <span>days</span></h1>
    </AgeCalculatorContainer>
  )
}

export default index