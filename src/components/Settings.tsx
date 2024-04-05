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
      <div className="flex flex-row justify-center">
        <div className="flex flex-col justify-center gap-y-[3vh] gap-x-[3vw] w-[70vw]">
          <Option text="Resolution" deafaultValue={resolutionValue} maxValue={240} onChange={onResolutionChange} value={resolutionValue} multiplier={1}/>
          <Option text="Render Size" deafaultValue={renderSizeValue} maxValue={30} onChange={onRenderSizeChange} value={renderSizeValue} multiplier={1}/>
          <Option text="Brightness" deafaultValue={brightnessValue} maxValue={5} onChange={onBrightnessChange} value={brightnessValue} multiplier={100}/>
        </div>
      </div>
    </div>
  )
}