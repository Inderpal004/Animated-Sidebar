import "./App.css";
import ListIcon from "@mui/icons-material/List";
import Item from "./components/Item";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ChecklistIcon from "@mui/icons-material/Checklist";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsRemoteIcon from "@mui/icons-material/SettingsRemote";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { motion } from "framer-motion";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    setOpen(!open);
  };

  const sideContainerVariants = {
    true: {
      width: "15rem",
    },
    false: {
      transition: {
        delay: 0.6,
      },
    },
  };

  const sidebarVariants = {
    true: {},
    false: {
      width: "5rem",
      transition: {
        delay: 0.4,
      },
    },
  };

  const profileVariants = {
    true: {
      alignSelf: 'center',
      width: "4rem",
      height: "4rem"
    },
    false: {
      alignSelf: 'flex-start',
      marginTop: '2rem',
      height: "2.5rem",
      width: "2.5rem",
      transition: {
        delay: 0.4,
      },
    },
  }

  return (
    <div className="App">
      <motion.div
        data-Open={open}
        variants={sideContainerVariants}
        initial={`${open}`}
        animate={`${open}`}
        className="sidebar-container"
      >
        <motion.div
          initial={`${open}`}
          animate={`${open}`}
          className="sidebar"
          variants={sidebarVariants}
        >
          <motion.div
            onClick={handleToggle}
            whileHover={{
              scale: 1.2,
              rotate: 180,
              backgroundColor: "rgba(255,255,255,0.3)",
              transition: { duration: 0.2 },
            }}
            className="lines-icon"
          >
            {" "}
            <ListIcon />{" "}
          </motion.div>
          <motion.div layout className="profile" initial={`${open}`}
            animate={`${open}`} variants={profileVariants} transition={{duration:0.4}}  whileHover={{
              backgroundColor: "rgba(255,255,255,0.3)",
              boxShadow:"0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter:"blur(5.5px)",
              WebkitBackdropFilter:"blur(5.5px)",
              border:"1px solid rgba(255,255,255,0.18)"
            }}>
            {" "}
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Profile"
            />{" "}
          </motion.div>
          <div className="groups">
            <div className="group">
              <motion.h3 animate={{opacity:open ? 1:0,height:open?"auto":0}} className="heading">ANALYTICS</motion.h3>
              <Item icon={<DashboardIcon />} name="Dashboard"  open={open}/>
              <Item icon={<BarChartIcon />} name="Performance"  open={open}/>
            </div>
            <div className="group">
              <motion.h3 animate={{opacity:open ? 1:0,height:open?"auto":0}} className="heading">Content</motion.h3>
              <Item icon={<AttachMoneyIcon />} name="Sales"  open={open}/>
              <Item icon={<ChecklistIcon />} name="Checklist"  open={open}/>
              <Item icon={<AccountCircleIcon />} name="Customers"  open={open}/>
            </div>
            <div className="group">
              <motion.h3 animate={{opacity:open ? 1:0,height:open?"auto":0}} className="heading">Customization</motion.h3>
              <Item icon={<SettingsRemoteIcon />} name="Segments"  open={open}/>
              <Item icon={<ColorLensIcon />} name="Themes"  open={open}/>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <div className="body-container"></div>
    </div>
  );
}

export default App;
