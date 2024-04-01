import { Option } from "./Option" 

export const Settings = () => {
  return (
    <div className="mt-[10vh]">
      <div className="flex flex-row gap-x-32 justify-center">
        <div className="flex flex-col gap-y-10 w-[50%]">
          <Option text="Size"/>
          <Option text="Hue"/>
          <Option text="Grayscale"/>
          <Option text="Brightness"/>
        </div>
      </div>
    </div>
  )
}