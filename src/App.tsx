import { cn } from "./lib/utils"

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
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <p className="m-0 leading-[0]">
        {text.map(item => {
            return  <span className="text-[8px] leading-none m-0" style={{color: `rgb(${item.Color.R},${item.Color.G},${item.Color.B})`}}>{item.Ascii} {item.Ascii == "\n" && <br/>}</span>
          }
        )}
      </p>
    </div>
  )
}

export default App
