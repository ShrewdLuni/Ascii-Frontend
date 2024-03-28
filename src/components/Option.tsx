import { Input } from "./ui/input"
import { Slider } from "./ui/slider"

interface OptionProps {
  text: string
}

export const Option = ({text} : OptionProps) => {
  return (
    <div className="grid grid-cols-[25%,50%,25%] gap-x-4">
      <p>{text}</p>
      <Slider defaultValue={[50]} max={100} step={1} />
      <Input type="number"/>
    </div>
  )
}