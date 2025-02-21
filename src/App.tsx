import axios from "axios"

import { Display } from "./components/Display"
import { Settings } from "./components/Settings"
import { ImageInput } from "./components/ImageInput"

import { useEffect, useState } from "react"
import { Credits } from "./components/Credits"

function App() {
  const [resolution, setResolution] = useState(40)
  const [renderSize, setRenderSize] = useState(4)
  const [brightness, setBrightness] = useState(1)
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageLink, setImageLink] = useState("")

  const [displayData,setDisplayData] = useState<{Ascii: string; Color: {R: number; G: number; B: number;};}[]>()

  const [isFile, setIsFile] = useState(false)

  const SERVER_URL = import.meta.env.SERVER_URL || ""
  
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleApi();
    }, 1000)

    return () => clearTimeout(delayDebounceFn)
  }, [imageFile, imageLink, resolution, brightness]);

  function handleApi() {
    const formData = new FormData()
    formData.append("image", (imageFile != null) ? imageFile : "null")
    formData.append("link", imageLink)
    formData.append("resolution", resolution.toString())
    formData.append("brightness", brightness.toString())
    formData.append("isFile", isFile ? "true" : "false")
    axios.post(SERVER_URL, formData).then((res) => {setDisplayData(res["data"]);})
  }
  
  return (
    <div className="flex flex-col bg-black h-screen w-screen items-center justify-center overflow-hidden">
      <div className="flex flex-col w-[90%] h-[80%] justify-center items-center">
        <Display displayData={displayData} renderSize={renderSize}/>
        <ImageInput isFile={isFile} imageLink={imageLink} setIsFile={setIsFile} setImageLink={setImageLink} setImageFile={setImageFile}/>
        <Settings resolutionValue={resolution} renderSizeValue={renderSize} brightnessValue={brightness} onResolutionChange={(value : number) => {setResolution(value);}} onRenderSizeChange={(value : number) => {setRenderSize(value);}} onBrightnessChange={(value : number) => {setBrightness(value);}} />
      </div>
      <Credits/>
    </div>
  )
}

export default App
