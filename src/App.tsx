import { useEffect, useState } from "react"
import { Display } from "./components/Display"
import { Input } from "./components/ui/input"

import axios from "axios"
import { Settings } from "./components/Settings"

function App() {
  const [displayData,setDisplayData] = useState<{Ascii: string;Color: {R: number;G: number;B: number;};}[]>()
  const [resolution,setResolution] = useState(40)
  const [renderSize,setRenderSize] = useState(4)
  const [brightness,setBrightness] = useState(1)
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    handleApi();
  }, [image,resolution,brightness]);

  function handleApi() {
    const formData = new FormData()
    formData.append("image", (image != null) ? image : "null")
    formData.append("resolution", resolution.toString())
    formData.append("brightness", brightness.toString())
    console.log(formData)
    axios.post("http://localhost:3001/test",formData).then((res) => {setDisplayData(res["data"]);console.log(res["data"])})
  }
  //todo one request per second
  return (
    <div className="flex bg-black h-screen w-screen items-center justify-center overflow-hidden p-8">
      <div className="flex flex-col w-[90%]">
        <Display displayData={displayData} renderSize={renderSize}/>
        <Input className="mt-[2vh] max-w-[50vh] self-center" type="file" name="file" onChange={(e) => {setImage(e.target!.files![0]);}}/>
        <Settings 
          resolutionValue={resolution} 
          renderSizeValue={renderSize}
          brightnessValue={brightness}
          onResolutionChange={(value : number) => {setResolution(value);}} 
          onRenderSizeChange={(value : number) => {setRenderSize(value);}}
          onBrightnessChange={(value : number) => {setBrightness(value);}} 
        />
      </div>
    </div>
  )
}

export default App
