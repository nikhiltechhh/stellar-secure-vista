import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
        <Routes>
          {/* Homepage without header/footer */}
          <Route path="/" element={<Index />} />

          {/* Pages with header at top and footer at bottom */}
          <Route
            path="*"
            element={
              <>
                <Header />
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/founderdetails" element={<FounderDetails />} />
                  <Route path="/service1" element={<Service1 />} />
                  <Route path="/service2" element={<Service2 />} />
                  <Route path="/service3" element={<Service3 />} />
                  <Route path="/service4" element={<Service4 />} />
                  <Route path="/service5" element={<Service5 />} />
                  <Route path="/service6" element={<Service6 />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
