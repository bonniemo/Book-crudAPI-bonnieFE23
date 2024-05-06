import { ChildrenProp } from "../types/Types"


const DisplayDataCard = ({ children }: ChildrenProp) => {
  return (
    <article className=" p-1 m-3 bg-slate-500">
        {children}
    </article>
  )
}

export default DisplayDataCard