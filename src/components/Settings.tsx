import { Option } from "./Option" 

interface SettingsProps {
  resolutionValue: number
  renderSizeValue: number
  brightnessValue: number
  onResolutionChange: (value: number) => void;
  onRenderSizeChange: (value: number) => void;
  onBrightnessChange: (value: number) => void;
}

export const Settings = ({resolutionValue,onResolutionChange,renderSizeValue,onRenderSizeChange,brightnessValue,onBrightnessChange} : SettingsProps) => {
  return (
    <div className="mt-[4vh]">
      <div className="flex flex-row gap-x-32 justify-center">
        <div className="flex flex-col gap-y-10 w-[60vh]">
          <Option text="Resolution" deafaultValue={resolutionValue} maxValue={240} onChange={onResolutionChange} value={resolutionValue} multiplier={1}/>
          <Option text="Render Size" deafaultValue={renderSizeValue} maxValue={30} onChange={onRenderSizeChange} value={renderSizeValue} multiplier={1}/>
          <Option text="Brightness" deafaultValue={brightnessValue} maxValue={5} onChange={onBrightnessChange} value={brightnessValue} multiplier={100}/>
        </div>
      </div>
    </div>
  )
}