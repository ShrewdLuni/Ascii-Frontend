interface DisplayProps {
  displayData: {Ascii : string, Color : {R : number,G : number, B : number}}[] | undefined
  renderSize: number
}

export const Display = ({displayData,renderSize} : DisplayProps) => {
  console.log(displayData)
  return (displayData != undefined && displayData != null ) && (
    <div className="overflow-scroll no-scrollbar max-h-[50vh] max-w-[90vw] text-center">
      <p className="font-mono font-bold text-[16px]" style={{fontSize: `${renderSize}px`, lineHeight: `${renderSize * 1.5}px`}}>
        {displayData.map((item,i) => {
          return  <span key={i} style={{color: `rgb(${item.Color.R},${item.Color.G},${item.Color.B})`} }>{item.Ascii != "enter" ? item.Ascii : ""} {item.Ascii == "enter" && <br/>}</span>
        })}
      </p>
    </div>
  )
}