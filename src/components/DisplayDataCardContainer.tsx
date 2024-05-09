import { ChildrenProp } from "../types/Types"


const DisplayDataCardContainer = ({ children }: ChildrenProp) => {
  return (
    <article className="flex m-10">
        {children}
    </article>
  )
}

export default DisplayDataCardContainer;