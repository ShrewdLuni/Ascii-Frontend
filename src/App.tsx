import { useState } from "react"
import { Display } from "./components/Display"
import { Settings } from "./components/Settings"
import axios from "axios"
import { Input } from "./components/ui/input"

function App() {

  let old = [
  {Ascii : "$", Color:{R:0,G:255, B:0}},]


  const [text,setText] = useState<{Ascii: string;Color: {R: number;G: number;B: number;};}[]>()

  function handleApi(event : React.ChangeEvent<HTMLInputElement>) {
    const formData = new FormData()
    let image = event.target!.files![0];
    formData.append("image", image)
    console.log(formData)
    axios.post("http://localhost:3001/test",formData).then((res) => setText(res["data"]))
  }

  return (
    <div className="flex bg-black h-screen w-screen items-center justify-center overflow-hidden">
      <div className="flex flex-col justify-center">
        <Display data={text == undefined ? old : text}/>
        <Input className="" type="file" name="file" onChange={(e) => handleApi(e)}/>
      </div>
    </div>
  )
}

export default App
