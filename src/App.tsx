import { useState } from "react"
import { Display } from "./components/Display"
import { Input } from "./components/ui/input"

import axios from "axios"
import { Settings } from "./components/Settings"

function App() {
  const [displayData,setDisplayData] = useState<{Ascii: string;Color: {R: number;G: number;B: number;};}[]>()
  const sizes = {xs: 1, sm: 2, md: 4, lg: 8, xl: 16}

  const [resolution,setResolution] = useState(40)
  const [brightness,setBrightness] = useState(100)
  const [image, setImage] = useState<File | null>(null);

  function handleApi() {

    if(image == null){
      return
    }
    const formData = new FormData()
    formData.append("image", image)
    formData.append("resolution", resolution.toString())
    formData.append("brightness", brightness.toString())
    axios.post("http://localhost:3001/test",formData).then((res) => setDisplayData(res["data"]))
  }

  return (
    <div className="flex bg-black h-screen w-screen items-center justify-center">
      <div className="flex flex-col">
        <Display displayData={displayData} renderSize={sizes["xs"]}/>
        <Input className="mt-[2vh]" type="file" name="file" onChange={async (e) => {await setImage(e.target!.files![0]);handleApi()}}/>
        <Settings onResolutionChange={async (number : number) => {await setResolution(number);handleApi()}} onBrightnessChange={async (number : number) => {await setBrightness(number);handleApi()}} resolutionValue={resolution} brightnessValue={brightness}/>
      </div>
    </div>
  )
}

export default App
