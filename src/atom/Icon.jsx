import PropTypes from "prop-types";
import { AiFillAppstore, AiOutlineRadarChart } from "react-icons/ai";
import { BiSolidDoughnutChart, BiSolidPurchaseTagAlt } from "react-icons/bi";
import { BsCurrencyDollar } from "react-icons/bs";
import {
  FaChartArea,
  FaChartBar,
  FaChartPie,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaQuestionCircle,
} from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { GrLineChart } from "react-icons/gr";
import { IoAnalyticsOutline, IoPerson, IoSettings } from "react-icons/io5";
import { LuScatterChart } from "react-icons/lu";
import { MdLogout, MdTableChart } from "react-icons/md";
import { PiChartPolarFill } from "react-icons/pi";
import { RiBubbleChartFill, RiCalendarScheduleFill } from "react-icons/ri";

const iconMap = {
  AiFillAppstore,
  AiOutlineRadarChart,
  BiSolidDoughnutChart,
  FaChartArea,
  FaChartBar,
  FaChartPie,
  FaQuestionCircle,
  GrLineChart,
  IoSettings,
  LuScatterChart,
  MdLogout,
  MdTableChart,
  PiChartPolarFill,
  RiBubbleChartFill,
  RiCalendarScheduleFill,
  BiSolidPurchaseTagAlt,
  BsCurrencyDollar,
  IoAnalyticsOutline,
  IoPerson,
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaUserLarge,
};

function Icon({icon: Icon, style, size, ...rest}) {
  const IconComponent = iconMap[Icon];
  return <IconComponent size={size} className={style} {...rest} />;
}

Icon.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.string,
  size: PropTypes.number,
};

export default Icon