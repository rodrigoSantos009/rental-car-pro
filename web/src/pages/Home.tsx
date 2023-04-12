import { Main } from "../components/Main";
import { ContentBox } from "../components/ContentBox";
import { PlanTrip } from "../components/PlanTrip";
import { PickCar } from "../components/PickCar";

export function Home() {
  return (
  <div className="w-5/6 m-auto h-full home">
    <Main /> 
    <ContentBox />
    <PlanTrip />
    <PickCar />
  </div>  
  )
}