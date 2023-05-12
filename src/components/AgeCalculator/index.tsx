import { AppContext } from "../../context/AgeContext"
import { AgeCalculatorContainer } from "./styles"
import { useContext } from 'react'

const AgeCalculator = () => {

  const { age } = useContext(AppContext)

  const { years, months, days } = age

  return (
    <AgeCalculatorContainer>
      <h1>{years ? years : '--'} <span>years</span></h1>
      <h1>{months ? months : '--'} <span>months</span></h1>
      <h1>{days ? days : '--'} <span>days</span></h1>
    </AgeCalculatorContainer>
  )
}

export default AgeCalculator