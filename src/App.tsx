import { useEffect, useState } from "react"
import { Display } from "./components/Display"
import { Input } from "./components/ui/input"

import axios from "axios"
import { Settings } from "./components/Settings"
import { Button } from "./components/ui/button"

function App() {
  
  const [resolution,setResolution] = useState(40)
  const [renderSize,setRenderSize] = useState(4)
  const [brightness,setBrightness] = useState(1)
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageLink, setImageLink] = useState("")

  const [displayData,setDisplayData] = useState<{Ascii: string;Color: {R: number;G: number;B: number;};}[]>()

  const [isFile,setIsFile] = useState(false)

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleApi();
    }, 200)

    return () => clearTimeout(delayDebounceFn)
  }, [imageFile,imageLink,resolution,brightness]);

  function handleApi() {
    const formData = new FormData()
    formData.append("image", (imageFile != null) ? imageFile : "null")
    formData.append("link", imageLink)
    formData.append("resolution", resolution.toString())
    formData.append("brightness", brightness.toString())
    formData.append("isFile", isFile ? "true" : "false")
    console.log(formData)
    axios.post("http://localhost:3001/test",formData).then((res) => {setDisplayData(res["data"]);console.log(res["data"])})
  }
  //todo one request per second
  return (
    <div className="flex bg-black h-screen w-screen items-center justify-center overflow-hidden">
      <div className="flex flex-col w-[90%]">
        <Display displayData={displayData} renderSize={renderSize}/>
        <div className="flex flex-row justify-center">
          <div className="flex flex-row gap-x-6">
            <Button className="bg-teal-500 hover:bg-teal-300 text-black text-lg mt-[2vh]" onClick={() => setIsFile(!isFile)}>{isFile ? <p><span className="text-white">File/</span>Link</p> : <p>File<span className="text-white">/Link</span></p>}</Button>
            {isFile
            ? <Input className="mt-[2vh] self-center font-bold" type="file" name="file" onChange={(e) => {setImageFile(e.target!.files![0]);}}/>
            : <Input className="mt-[2vh] self-center font-bold" type="text" placeholder="Image link..." value={imageLink} onChange={(e) => {setImageLink(e.target.value);}}/>
            }
          </div>
        </div>
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
