import { AppContext } from "../../context/AgeContext"
import { AgeCalculatorContainer } from "./styles"
import { useContext } from 'react'

const AgeCalculator = () => {

  const { age } = useContext(AppContext)

  return (
    <AgeCalculatorContainer>
      <h1>{age.years ? age.years : '--'} <span>years</span></h1>
      <h1>{age.months ? age.months : '--'} <span>months</span></h1>
      <h1>{age.days ? age.days : '--'} <span>days</span></h1>
    </AgeCalculatorContainer>
  )
}

export default AgeCalculator