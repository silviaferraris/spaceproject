import React, { ReactNode } from "react";

interface LayoutProps {
  [x: string]: ReactNode;
}
function Layout(props: LayoutProps) {
  return (
    <>
      <div id="content" className="main-content">
        {props.children}
      </div>
    </>
  );
}
export default Layout;
