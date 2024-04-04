import { Input } from "./ui/input"
import { Slider } from "./ui/slider"

interface OptionProps {
  text: string
  value: number
  deafaultValue : number
  maxValue: number
  multiplier : number
  onChange: (value: number) => void;
}

export const Option = ({text,value,deafaultValue,maxValue,multiplier,onChange} : OptionProps) => {
  return (
    <div className="grid grid-cols-[30%,45%,25%] gap-x-8 w-[85%] text-white font-bold">
      <p>{text}</p>
      <Slider value={[value]} defaultValue={[deafaultValue]} max={maxValue} step={1/multiplier} onValueChange={(value) => onChange(value[0])}/>
      <Input className="text-black" type="number" value={value} step={1/multiplier} onChange={(event) => {onChange(event.target.valueAsNumber);}}/>
    </div>
  )
}