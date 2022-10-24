import React from "react";
import { motion } from "framer-motion";
import { GrClose } from "react-icons/gr";
// import {AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai'
// import {FaPinterestP} from 'react-icons/fa'
import "./Sidebar.scss";

const Sidebar = ({handleToggle}) => {
  return (
    <motion.div
      className="app__sidebar"
      whileInView={{ x: [-470, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="app__sidebar-close">
        <GrClose className="close-icon" onClick={handleToggle} />
      </div>
      <div className="app__sidebar-links">
        {["Home", "About", "Work", "Portfolio", "Contact"].map((link) => (
          <a href={`/${link}`} className="link" key={link}>
            {link}
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default Sidebar;
