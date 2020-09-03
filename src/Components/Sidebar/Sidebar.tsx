import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { FaHome, FaUserFriends, FaStar, FaBan } from "react-icons/fa";
import Suggestions from "../../Containers/Suggestions/Suggestions";
import Favourites from "../../Containers/Favourites/Favourites";
import Rejected from "../../Containers/Rejected/Rejected";
import "./Sidebar.css";

interface Props {}

const routes = [
  {
    path: "/suggestions",
    exact: true,
    main: () => <Suggestions />,
  },
  {
    path: "/favourites",
    main: () => <Favourites />,
  },
  {
    path: "/rejected",
    main: () => <Rejected />,
  },
];

const Sidebar: React.FC<Props> = (props) => {
  return (
    <Router>
      <div className="flex">
        <div className="Sidebar w-1/6">
          <a href="/">
            <div className="logo flex justify-center mt-32">
              <FaHome color="orange" size="3.5em" />
              <div className="name ml-2 -mt-1">
                <span className="block text-orange-500 font-bold text-2xl">
                  GYPSY
                </span>
                <span className="block text-orange-500 text-lg">HOUSING</span>
              </div>
            </div>
          </a>
          <div className="flex justify-center mt-24">
            <div className="btnlink w-48">
              <NavLink
                to="/user/suggestions"
                className="flex justify-start w-56 px-4 py-1 mt-4"
                activeClassName="bg-orange-200 text-orange-500 rounded-lg selected"
              >
                <FaUserFriends size="2.5em" />
                <span className="text-2xl font-bold ml-4">Suggestions</span>
              </NavLink>
              <NavLink
                to="/user/favourites"
                className="flex justify-start w-56 px-4 py-1 mt-4"
                activeClassName="bg-orange-200 text-orange-500 rounded-lg"
              >
                <FaStar size="2.5em" />
                <span className="text-2xl font-bold ml-4">Favourites</span>
              </NavLink>
              <NavLink
                to="/user/rejected"
                className="flex justify-start items-center w-56 px-4 py-1 mt-4"
                activeClassName="bg-orange-200 text-orange-500 rounded-lg"
              >
                <FaBan size="2em" />
                <span className="text-2xl font-bold ml-4">Rejected</span>
              </NavLink>
            </div>
          </div>
          <div className="loggedUser flex justify-center mt-64">
            <div className="">
              <img
                className="h-16 w-16 my-5 object-cover object-top rounded-full"
                src="https://images.pexels.com/photos/1384219/pexels-photo-1384219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
              />
            </div>
            <div className="mt-5">
              <span className="block text-blue-500 font-bold text-xl ml-4 cursor-pointer">
                Connor Ching
              </span>
              <a
                href="/"
                className="block text-red-500 font-bold text-xl underline ml-4 cursor-pointer"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
        <div className="w-5/6">
          <Switch>
            <Route path="/user/suggestions" component={Suggestions} />
            <Route path="/user/favourites" component={Favourites} />
            <Route path="/user/rejected" component={Rejected} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Sidebar;
