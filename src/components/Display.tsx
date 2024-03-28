
interface DisplayProps {
  data : {Ascii : string, Color : {R : number,G : number, B : number}}[]
}

export const Display = ({data} : DisplayProps) => {
  return (
    <div className="border-solid border-4 border-black p-10">
      <p className="m-0 leading-[1]">
        {data.map(item => {
            return  <span className="text-[50px] leading-none m-0" style={{color: `rgb(${item.Color.R},${item.Color.G},${item.Color.B})`}}>{item.Ascii} {item.Ascii == "\n" && <br/>}</span>
          }
        )}
      </p>
    </div>
  )
}