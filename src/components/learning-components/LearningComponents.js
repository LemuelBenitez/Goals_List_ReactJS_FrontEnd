import OneComponent from './OneComponent'
import TwoComponent from './TwoComponenet'
import ThreeComponent, {FourComponent } from './ThreeComponent'

export default function LearningComponent () {
  return (
    <div>
      <OneComponent />
      <TwoComponent />
      <ThreeComponent />
      <FourComponent />
    </div>
  )
}
