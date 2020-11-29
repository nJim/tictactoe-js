import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Icon } from '../../assets/icon-logo.svg';

const Logo = () => <Link to="/"><Icon /></Link>;

export default Logo;
