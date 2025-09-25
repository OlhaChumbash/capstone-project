import React from "react";

export const Link = ({ children, to, ...props }) => <a href={to} {...props}>{children}</a>;
export const useNavigate = () => () => {};
export const useLocation = () => ({ pathname: "/" });
