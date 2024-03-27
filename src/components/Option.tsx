import { Input } from "./ui/input"
import { Slider } from "./ui/slider"

interface OptionProps {
  text: string
}

export const Option = ({text} : OptionProps) => {
  return (
    <div className="flex flex-row gap-x-8">
      <p>{text}</p>
      <Slider defaultValue={[50]} max={100} step={1} />
      <Input type="number" className="w-[25%]"/>
    </div>
  )
}