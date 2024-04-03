import { Option } from "./Option" 

interface SettingsProps {
  resolutionValue: number
  brightnessValue: number
  onResolutionChange: (value: number) => void;
  onBrightnessChange: (value: number) => void;
}

export const Settings = ({resolutionValue,onResolutionChange,brightnessValue,onBrightnessChange} : SettingsProps) => {
  return (
    <div className="mt-[5vh] h-[10vh]">
      <div className="flex flex-row gap-x-32 justify-center">
        <div className="flex flex-col gap-y-10 w-full">
          <Option text="Resolution" deafaultValue={resolutionValue} maxValue={240} onChange={onResolutionChange} value={resolutionValue} multiplier={1}/>
          <Option text="Brightness" deafaultValue={brightnessValue} maxValue={500} onChange={onBrightnessChange} value={brightnessValue} multiplier={100}/>
        </div>
      </div>
    </div>
  )
}