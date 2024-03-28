import { Display } from "./components/Display"
import { Settings } from "./components/Settings"

function App() {

  const text = [
  {Ascii : "$", Color:{R:99,G:89, B:32}},
  {Ascii : "$", Color:{R:123,G:0, B:0}},
  {Ascii : "$", Color:{R:0,G:255, B:0}},
  {Ascii : "$", Color:{R:0,G:255, B:0}},
  {Ascii : "\n", Color:{R:0,G:255, B:145}},
  {Ascii : "$", Color:{R:14,G:85, B:173}},
  {Ascii : "$", Color:{R:255,G:0, B:0}},
  {Ascii : "\n", Color:{R:0,G:255, B:123}},
  {Ascii : "$", Color:{R:255,G:41, B:41}},
  {Ascii : "$", Color:{R:255,G:0, B:255}},
  {Ascii : "$", Color:{R:255,G:0, B:255}},
  {Ascii : "$", Color:{R:0,G:255, B:0}},]

  

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <Display data={text}/>
      <Settings/>
    </div>
  )
}

export default App
