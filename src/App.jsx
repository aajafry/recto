import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { SidebarProvider } from "./contexts/SidebarContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import {
  AreaChart,
  BarChart,
  BubbleChart,
  Calendar,
  Dashboard,
  DoughnutChart,
  FAQ,
  LineChart,
  Profile,
  Login,
  MixedChart,
  NotFound,
  PieChart,
  PolarChart,
  RadarChart,
  ScatterChart,
  Signup,
  AuthHandler,
} from "./pages/index";
import withProtectedLayout from "./template/withProtectedLayout";


function App() {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <Router>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/auth-handler" element={<AuthHandler />} />
            <Route path="/" element={withProtectedLayout(Dashboard)} />
            <Route path="/dashboard" element={withProtectedLayout(Dashboard)} />
            <Route
              path="/calendar-app"
              element={withProtectedLayout(Calendar)}
            />
            <Route
              path="/area-chart"
              element={withProtectedLayout(AreaChart)}
            />
            <Route path="/bar-chart" element={withProtectedLayout(BarChart)} />
            <Route
              path="/bubble-chart"
              element={withProtectedLayout(BubbleChart)}
            />
            <Route
              path="/doughnut-chart"
              element={withProtectedLayout(DoughnutChart)}
            />
            <Route
              path="/line-chart"
              element={withProtectedLayout(LineChart)}
            />
            <Route path="/pie-chart" element={withProtectedLayout(PieChart)} />
            <Route
              path="/polar-chart"
              element={withProtectedLayout(PolarChart)}
            />
            <Route
              path="/radar-chart"
              element={withProtectedLayout(RadarChart)}
            />
            <Route
              path="/scatter-chart"
              element={withProtectedLayout(ScatterChart)}
            />
            <Route
              path="/mixed-chart"
              element={withProtectedLayout(MixedChart)}
            />
            <Route path="/faq" element={withProtectedLayout(FAQ)} />
            <Route path="/profile" element={withProtectedLayout(Profile)} />
            <Route path="*" element={withProtectedLayout(NotFound)} />
          </Routes>
        </Router>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App