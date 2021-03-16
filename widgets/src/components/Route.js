//  No need to import React lib cause we don't have any JSX

const Route = ({ path, children }) => {
  return window.location.pathname === path ? children : null;
};

export default Route;
