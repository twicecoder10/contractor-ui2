import logo from "../../resources/img/logo_light.png";
import {Link} from "react-router-dom";

export default function Example() {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <img className="h-12 w-auto" src={logo} alt="" />
          <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">
            Log out <span aria-hidden="true">&rarr;</span>
          </Link>
      </nav>
    </header>
  )
}
