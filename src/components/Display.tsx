interface DisplayProps {
  displayData: {Ascii : string, Color : {R : number,G : number, B : number}}[] | undefined
  renderSize: number
}

export const Display = ({displayData,renderSize} : DisplayProps) => {

  return displayData != undefined && (
    <div className="overflow-scroll no-scrollbar max-h-[60vh] max-w-[90vw] self-center">
      <p className={`text-[${renderSize}px] leading-[${renderSize * 1.5}px] font-mono font-bold`}>
        {displayData.map((item,i) => {
          return  <span key={i} style={{color: `rgb(${item.Color.R},${item.Color.G},${item.Color.B})`} }>{item.Ascii != "enter" ? item.Ascii : ""} {item.Ascii == "enter" && <br/>}</span>
        })}
      </p>
    </div>
  )
}