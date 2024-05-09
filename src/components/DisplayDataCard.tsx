import { ChildrenProp } from "../types/Types"


const DisplayDataCard = ({ children }: ChildrenProp) => {
  return (
    <article className="p-5 rounded-lg m-3 border-8 border-fuchsia-50 flex flex-col flex-1 align-middle">
        {children}
    </article>
  )
}

export default DisplayDataCard