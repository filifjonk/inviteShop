import { Link } from "react-router-dom"

function Header() {
    return (
      <div className="wrapper">
        <header>
          <div className="headerLeft">
            <Link to="/">
              <h3>QPICK</h3>
              </Link>
          </div>
          <ul className="headerRight">
            <li className="m-45"><img width = {22} height = {20} src ="/img/like.svg" alt ="" /></li>

            <Link to="/cart">
              <li> <img width = {23.2} height = {23.2} src ="/img/basket.svg" alt ="" />
              <span className="ellips">' 1 '</span> 
              </li>
            </Link>
          </ul>
        </header>
        <div className="content">
          <h1>Наушники</h1>
          
        </div>
      </div>
    )
}
export {Header}