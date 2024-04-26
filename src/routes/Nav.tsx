import { NavLink, Outlet } from "react-router-dom";
import iconHome from '../Assets/home.png'

const Nav = () => {
  return (
    <>
      <nav>
        <ul className="flex gap-5 align-middle justify-end p-4">
          <li><NavLink to ="/"><img src={iconHome} className="w-8"/>Home</NavLink></li>
          <li><NavLink to ="/">My favourites</NavLink></li>
          <li><NavLink to ="/">Search Movie</NavLink></li>
        </ul>
      </nav>
      <Outlet/>
    </>

  
  )
}

export default Nav