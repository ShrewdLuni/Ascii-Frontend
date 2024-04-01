
interface DisplayProps {
  data : {Ascii : string, Color : {R : number,G : number, B : number}}[] | undefined
}

export const Display = ({data} : DisplayProps) => {
  let size = 1;

  return data != undefined && (
    <p className={`text-[${size}px] leading-[${size*1.5}px]`}>
      {data.map((item,i) => {
        return  <span key={i} className="font-mono font-bold" style={{color: `rgb(${item.Color.R},${item.Color.G},${item.Color.B})`} }>{item.Ascii != "enter" ? item.Ascii : ""} {item.Ascii == "enter" && <br/>}</span>
      })}
    </p>
  )
}