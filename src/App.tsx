import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Slider } from "./components/ui/slider"

function App() {

  const text = [
    {"Ascii" : "$", "Color":{"R":255,"G":0, "B":0}},
    {"Ascii" : "$", "Color":{"R":73,"G":255, "B":32}},
    {"Ascii" : "$", "Color":{"R":231,"G":0, "B":156}},
    {"Ascii" : "\n", "Color":{"R":255,"G":0, "B":0}},
    {"Ascii" : "$", "Color":{"R":15,"G":0, "B":14}},
    {"Ascii" : "$", "Color":{"R":255,"G":14, "B":14}},
    {"Ascii" : "$", "Color":{"R":75,"G":0, "B":255}},
    {"Ascii" : "$", "Color":{"R":255,"G":123, "B":255}},
    {"Ascii" : "\n", "Color":{"R":32,"G":0, "B":0}},
    {"Ascii" : "$", "Color":{"R":255,"G":0, "B":255}},
    {"Ascii" : "$", "Color":{"R":255,"G":89, "B":123}},
  ]
  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="border-solid border-8 border-black p-10">
        <p className="m-0 leading-[0]">
          {text.map(item => {
              return  <span className="text-[50px] leading-none m-0" style={{color: `rgb(${item.Color.R},${item.Color.G},${item.Color.B})`}}>{item.Ascii} {item.Ascii == "\n" && <br/>}</span>
            }
          )}
        </p>
      </div>
      <div className="mt-[10vh] w-screen">
        <div className="flex flex-row gap-x-32 justify-center">
          <div className="flex flex-col gap-y-10 w-[30vh]">
            <div className="flex flex-row gap-x-8">
              <p>Text</p>
              <Slider defaultValue={[50]} max={100} step={1} />
              <Input type="number" className="w-[25%]"/>
            </div>
            <div className="flex flex-row gap-x-8">
              <p>Text</p>
              <Slider defaultValue={[50]} max={100} step={1} />
              <Input type="number" className="w-[25%]"/>
            </div>
            <div className="flex flex-row gap-x-8">
              <p>Text</p>
              <Slider defaultValue={[50]} max={100} step={1} />
              <Input type="number" className="w-[25%]"/>
            </div>
            <div className="flex flex-row gap-x-8">
              <p>Text</p>
              <Slider defaultValue={[50]} max={100} step={1} />
              <Input type="number" className="w-[25%]"/>
            </div>
          </div>

          <div className="flex flex-col gap-y-10 w-[30vh]">
            <div className="flex flex-row gap-x-8">
              <p>Text</p>
              <Slider defaultValue={[50]} max={100} step={1} />
              <Input type="number" className="w-[25%]"/>
            </div>
            <div className="flex flex-row gap-x-8">
              <p>Text</p>
              <Slider defaultValue={[50]} max={100} step={1} />
              <Input type="number" className="w-[25%]"/>
            </div>
            <div className="flex flex-row gap-x-8">
              <p>Text</p>
              <Slider defaultValue={[50]} max={100} step={1} />
              <Input type="number" className="w-[25%]"/>
            </div>
            <div className="flex flex-row gap-x-8">
              <p>Text</p>
              <Slider defaultValue={[50]} max={100} step={1} />
              <Input type="number" className="w-[25%]"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
