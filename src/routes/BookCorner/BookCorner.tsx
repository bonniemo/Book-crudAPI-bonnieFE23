import { NavLink, Outlet } from "react-router-dom"

const BookCorner = () => {
  return (
    <>
        <nav>
            <ul>
                <li><NavLink to="/BookCorner/FavouriteBooks">My Favourite Books</NavLink></li>
                <li><NavLink to="/BookCorner/FavouriteAuthors">My Favourite Authors</NavLink></li>
                <li><NavLink to="/BookCorner/ReadBooks">My Reading History</NavLink></li>
            </ul>
        </nav>
        <Outlet/>
    </>
  )
}

export default BookCorner