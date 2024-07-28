/* eslint-disable react-refresh/only-export-components */
const menus = [
  {
    title: "",
    items: [
      {
        label: "Dashboard",
        href: "/",
        icon: "AiFillAppstore",
      },
    ],
  },
  {
    title: "Apps",
    items: [
      {
        label: "Calendar",
        href: "/calendar-app",
        icon: "RiCalendarScheduleFill",
      },
    ],
  },
  {
    title: "Charts",
    items: [
      {
        label: "Area",
        href: "/area-chart",
        icon: "FaChartArea",
      },
      {
        label: "Line",
        href: "/line-chart",
        icon: "GrLineChart",
      },
      {
        label: "Bar",
        href: "/bar-chart",
        icon: "FaChartBar",
      },
      {
        label: "Bubble",
        href: "/bubble-chart",
        icon: "RiBubbleChartFill",
      },
      {
        label: "Pie",
        href: "/pie-chart",
        icon: "FaChartPie",
      },
      {
        label: "Doughnut",
        href: "/doughnut-chart",
        icon: "BiSolidDoughnutChart",
      },
      {
        label: "Radar",
        href: "/radar-chart",
        icon: "AiOutlineRadarChart",
      },
      {
        label: "Scatter",
        href: "/scatter-chart",
        icon: "LuScatterChart",
      },
      {
        label: "Polar",
        href: "/polar-chart",
        icon: "PiChartPolarFill",
      },
      {
        label: "Mixed",
        href: "/mixed-chart",
        icon: "MdTableChart",
      },
    ],
  },
  {
    title: "Pages",
    items: [
      {
        label: "FAQ",
        href: "/faq",
        icon: "FaQuestionCircle",
      },
    ],
  },
  {
    title: "",
    items: [
      {
        label: "Profile",
        href: "/profile",
        icon: "FaUserLarge",
      },
    ],

  },
];

const cards = [
  {
    icon: "BsCurrencyDollar",
    title: "Total Revenue",
    amount: "12,000",
    percentage: 12,
  },
  {
    icon: "BiSolidPurchaseTagAlt",
    title: "Total Purchase",
    amount: "12,000",
    percentage: -20,
  },
  {
    icon: "IoAnalyticsOutline",
    title: "Total Sales",
    amount: "24,000",
    percentage: 40,
  },
  {
    icon: "IoPerson",
    title: "Total Customer",
    amount: "4,000",
    percentage: 8,
  },
];

const faqs = [
    {
        question: "What is FAQ?",
        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, reprehenderit nesciunt. Iste laudantium tenetur culpa.",
    },
    {
        question: "What is FAQ?",
        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, reprehenderit nesciunt. Iste laudantium tenetur culpa.",
    },
    {
        question: "What is FAQ?",
        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, reprehenderit nesciunt. Iste laudantium tenetur culpa.",
    },
]

const events = [
  {
    id: "12315",
    title: "All-day event",
    start: "2024-07-15",
  },
  {
    id: "5123",
    title: "Timed event",
    start: "2024-07-28",
  },
  {
    id: "9287",
    title: "Meeting",
    start: "2024-07-16",
  },
];

const socialAuthProviders = [
  {
    provider: "google",
    icon: "FaGoogle",
    themeStyle: "bg-white hover:bg-gray-100 text-slate-800",
  },
  {
    provider: "facebook",
    icon: "FaFacebook",
    themeStyle:
      "bg-blue-700 hover:bg-blue-800 text-gray-100 cursor-not-allowed",
  },
  {
    provider: "github",
    icon: "FaGithub",
    themeStyle: "bg-slate-900 hover:bg-slate-800 text-gray-100",
  },
];


const SalesRows = [
  {
    id: 1,
    Product: "iPhone 15 Pro",
    Quentity: 1,
    Amount: 125000,
  },
  {
    id: 2,
    Product: "Apple Watch",
    Quentity: 3,
    Amount: 130000,
  },
  {
    id: 3,
    Product: "MacBook Pro",
    Quentity: 1,
    Amount: 150000,
  },
  {
    id: 4,
    Product: "Apple Headphones",
    Quentity: 10,
    Amount: 45000,
  },
];

const SalesColumns = [
  {
    field: "id",
    headerName: "Seles ID",
    headerClassName: "super-app-theme--header",
    sortable: false,
    editable: false,
    filterable: false,
  },
  {
    field: "Product",
    headerName: "Product",
    headerClassName: "super-app-theme--header",
    type: "string",
    flex: 1,
  },
  {
    field: "Quentity",
    headerName: "Quentity",
    headerClassName: "super-app-theme--header",
    type: "number",
    flex: 1,
  },
  {
    field: "Amount",
    headerName: "Amount",
    headerClassName: "super-app-theme--header",
    type: "number",
    flex: 1,
  },
];

const OrderRows = [
  {
    id: 1,
    Product: "iPhone 15 Pro",
    Quentity: 2,
    Amount: 250000,
  },
  {
    id: 2,
    Product: "Apple Watch",
    Quentity: 5,
    Amount: 216666,
  },
  {
    id: 3,
    Product: "MacBook Pro",
    Quentity: 2,
    Amount: 300000,
  },
  {
    id: 4,
    Product: "Apple Headphones",
    Quentity: 5,
    Amount: 22500,
  },
];

const OrderColumns = [
  {
    field: "id",
    headerName: "Seles ID",
    headerClassName: "super-app-theme--header",
    sortable: false,
    editable: false,
    filterable: false,
  },
  {
    field: "Product",
    headerName: "Product",
    headerClassName: "super-app-theme--header",
    type: "string",
    flex: 1,
  },
  {
    field: "Quentity",
    headerName: "Quentity",
    headerClassName: "super-app-theme--header",
    type: "number",
    flex: 1,
  },
  {
    field: "Amount",
    headerName: "Amount",
    headerClassName: "super-app-theme--header",
    type: "number",
    flex: 1,
  },
];

export {
  OrderColumns,
  OrderRows,
  SalesColumns,
  SalesRows,
  cards,
  events,
  faqs,
  menus,
  socialAuthProviders
};

