import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import FounderDetails from "./pages/Founderdetails";
import Service1 from "./pages/Service1";
import Service2 from "./pages/Service2";
import Service3 from "./pages/Service3";
import Service4 from "./pages/Service4";
import Service5 from "./pages/Service5";
import Service6 from "./pages/Service6";
import NotFound from "./pages/NotFound";

import Header from "./components/Header";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<><Header /><About /><Footer /></>} />
          <Route path="/founderdetails" element={<><Header /><FounderDetails /><Footer /></>} />
          <Route path="/service1" element={<><Header /><Service1 /><Footer /></>} />
          <Route path="/service2" element={<><Header /><Service2 /><Footer /></>} />
          <Route path="/service3" element={<><Header /><Service3 /><Footer /></>} />
          <Route path="/service4" element={<><Header /><Service4 /><Footer /></>} />
          <Route path="/service5" element={<><Header /><Service5 /><Footer /></>} />
          <Route path="/service6" element={<><Header /><Service6 /><Footer /></>} />
          <Route path="*" element={<><Header /><NotFound /><Footer /></>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
