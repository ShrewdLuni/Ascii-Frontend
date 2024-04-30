import { Github, Linkedin } from "lucide-react"

export const Credits = () => {
  return (
    <div className="flex flex-row gap-x-6">
      <a className="flex flex-row gap-x-2 text-gray-400 hover:text-white bg-inherit hover:bg-inherit font-bold" href="https://github.com/ShrewdLuni">
        <Github/>
        <p>ShrewdLuni</p>
      </a>
      <a className="flex flex-row gap-x-2 text-gray-400 hover:text-white bg-inherit hover:bg-inherit font-bold" href="https://www.linkedin.com/in/shrewd/">
        <Linkedin/>
        <p>Linkedin</p>
      </a>
    </div>
  )
}