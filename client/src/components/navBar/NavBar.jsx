import "./navBar.scss"
import CottageIcon from '@mui/icons-material/Cottage';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const NavBar = () => {

    const{ toggle, darkMode } = useContext(DarkModeContext);
    const{ currentUser } = useContext(AuthContext);

    return (
        <div className="navBar">
            <div className="left">
                <Link to="/" style={{textDecoration:"none"}}>
                  <span>PaPeFu</span>
                </Link>
                <CottageIcon />
                {darkMode ? <WbSunnyOutlinedIcon onClick={toggle}/> : <NightsStayIcon onClick={toggle}/>}
                <GridViewOutlinedIcon />
                <div className="search">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search..."/>
                </div>
            </div>
            <div className="right">
            <PersonOutlinedIcon />
            <EmailOutlinedIcon />
            <NotificationsOutlinedIcon />
            <div className="user">
            <img
            src={currentUser.profilePic}
            alt=""
            />
            <span>{currentUser.name}</span>
            </div>
            </div>
        </div>
    );
};

export default NavBar