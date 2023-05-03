import { AgeCalculatorContainer } from "./styles"

const index = () => {
  return (
    <AgeCalculatorContainer>
      <h1 className="age-years">38 <span>years</span></h1>
      <h1 className="age-months">3 <span>months</span></h1>
      <h1 className="age-days">26 <span>days</span></h1>
    </AgeCalculatorContainer>
  )
}

export default index