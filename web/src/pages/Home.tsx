import { ContentBox } from "../components/ContentBox";
import { Main } from "../components/Main";
import { PickCar } from "../components/PickCar";

export function Home() {
  return (
  <div className="w-5/6 m-auto h-full home">
    <Main /> 
    <ContentBox />
  </div>  
  )
}