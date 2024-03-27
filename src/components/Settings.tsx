import { Option } from "./Option" 

export const Settings = () => {
  return (
    <div className="mt-[10vh] w-screen">
      <div className="flex flex-row gap-x-32 justify-center">
        <div className="flex flex-col gap-y-10 w-[30vh]">
          <Option text="Size"/>
          <Option text="Hue"/>
          <Option text="Grayscale"/>
          <Option text="Brightness"/>
        </div>
        <div className="flex flex-col gap-y-10 w-[30vh]">
          <Option text="text"/>
          <Option text="text"/>
          <Option text="text"/>
          <Option text="text"/>
        </div>
      </div>
    </div>
  )
}