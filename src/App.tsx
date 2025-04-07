import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Service Routes
import AerospaceDesign from "./pages/services/AerospaceDesign";
import AircraftDesign from "./pages/services/design/AircraftDesign";
import RocketDesign from "./pages/services/design/RocketDesign";
import DroneDesign from "./pages/services/design/DroneDesign";
import AerospaceAnalysis from "./pages/services/AerospaceAnalysis";
import AerospaceManufacturing from "./pages/services/AerospaceManufacturing";
import CompositesMaterials from "./pages/services/manufacturing/CompositesMaterials";
import ThreeDPrinting from "./pages/services/manufacturing/ThreeDPrinting";
import FlightTesting from "./pages/services/FlightTesting";
import OutreachProgram from "./pages/services/OutreachProgram";

// Expert Routes
import MyAccount from "./pages/expert/MyAccount";
import Cart from "./pages/expert/Cart";
import Checkout from "./pages/expert/Checkout";

// Other Routes
import Jobs from "./pages/Jobs";
import PrivacyPolicy from "./pages/contact/PrivacyPolicy";

// Employee Routes
import EmployeeMailLogin from "./pages/employee/MailLogin";
import EmployeeTimeTracker from "./pages/employee/TimeTracker";
import EmployeeLeave from "./pages/employee/LeaveApplication";
import EmployeeExpense from "./pages/employee/ExpenseRequest";
import EmployeeSubmission from "./pages/employee/Submission";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Service Routes */}
          <Route path="/services/design" element={<AerospaceDesign />} />
          <Route path="/services/design/aircraft" element={<AircraftDesign />} />
          <Route path="/services/design/rocket" element={<RocketDesign />} />
          <Route path="/services/design/drone" element={<DroneDesign />} />
          <Route path="/services/analysis" element={<AerospaceAnalysis />} />
          <Route path="/services/manufacturing" element={<AerospaceManufacturing />} />
          <Route path="/services/manufacturing/composite" element={<CompositesMaterials />} />
          <Route path="/services/manufacturing/3d" element={<ThreeDPrinting />} />
          <Route path="/services/flight-testing" element={<FlightTesting />} />
          <Route path="/services/outreach" element={<OutreachProgram />} />
          
          {/* Expert Routes */}
          <Route path="/expert/my-account" element={<MyAccount />} />
          <Route path="/expert/cart" element={<Cart />} />
          <Route path="/expert/checkout" element={<Checkout />} />
          
          {/* Other Routes */}
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contact/privacy-policy" element={<PrivacyPolicy />} />
          
          {/* Employee Routes */}
          <Route path="/employee/mail-login" element={<EmployeeMailLogin />} />
          <Route path="/employee/tracker" element={<EmployeeTimeTracker />} />
          <Route path="/employee/leave" element={<EmployeeLeave />} />
          <Route path="/employee/expense" element={<EmployeeExpense />} />
          <Route path="/employee/submission" element={<EmployeeSubmission />} />
          
          {/* Catch-all Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
