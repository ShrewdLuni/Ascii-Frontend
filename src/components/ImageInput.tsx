import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface ImageInputProps {
  isFile: boolean
  imageLink: string
  setIsFile : (value : boolean) => void
  setImageLink: (value : string) => void
  setImageFile: (value : File | null) => void
}

export const ImageInput = ({isFile,imageLink,setIsFile,setImageLink,setImageFile} : ImageInputProps) => {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-row gap-x-6">
        <Button className="bg-teal-500 hover:bg-teal-300 text-black text-lg mt-[2vh]" onClick={() => setIsFile(!isFile)}>{isFile ? <p><span className="text-white">File/</span>Link</p> : <p>File<span className="text-white">/Link</span></p>}</Button>
        {isFile
        ? <Input className="mt-[2vh] self-center font-bold" type="file" name="file" onChange={(e) => {setImageFile(e.target!.files![0]);}}/>
        : <Input className="mt-[2vh] self-center font-bold" type="text" placeholder="Image link..." value={imageLink} onChange={(e) => {setImageLink(e.target.value);}}/>
        }
      </div>
    </div>
  )
}