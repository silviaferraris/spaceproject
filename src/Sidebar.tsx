import React from "react";
import styles from "./style";

const Sidebar: React.FC = () => {
  return (
    <div style={styles.sidebar}>
      <ul style={styles.sidebarUl}>
        <li style={styles.sidebarLi}>View</li>
        <li style={styles.sidebarLi}>Add</li>
        <li style={{ ...styles.sidebarLi, ...styles.sidebarLiHover }}>Track</li>
        <li style={styles.sidebarLi}>Exit</li>
      </ul>
    </div>
  );
};

export default Sidebar;
