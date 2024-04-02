import { useState } from "react"
import { Display } from "./components/Display"
import { Input } from "./components/ui/input"

import axios from "axios"

function App() {



  const [displayData,setDisplayData] = useState<{Ascii: string;Color: {R: number;G: number;B: number;};}[]>()
  const sizes = {xs: 1, sm: 2, md: 4, lg: 8, xl: 16}


  function handleApi(event : React.ChangeEvent<HTMLInputElement>) {
    const formData = new FormData()
    formData.append("image", event.target!.files![0])
    axios.post("http://localhost:3001/test",formData).then((res) => setDisplayData(res["data"]))
  }

  return (
    <div className="flex bg-black h-screen w-screen items-center justify-center">
      <div className="flex flex-col">
        <Display displayData={displayData} renderSize={sizes["md"]}/>
        <Input className="" type="file" name="file" onChange={(e) => handleApi(e)}/>
      </div>
    </div>
  )
}

export default App
