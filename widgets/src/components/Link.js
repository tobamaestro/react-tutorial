import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    // Allow natural cmd/ctrl + click browser behaviour
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();

    //  add path to URL
    window.history.pushState({}, "", href);

    // dispatch event to all Routes listening
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
