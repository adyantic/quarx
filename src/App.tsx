import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Solutions from "./pages/Solutions";
import ChordDetail from "./pages/ChordDetail";
import BasisDetail from "./pages/BasisDetail";
import LaraDetail from "./pages/LaraDetail";
import PatientJourneyDetail from "./pages/PatientJourneyDetail";
import HcpProviderDetail from "./pages/HcpProviderDetail";
import IdnHealthSystemDetail from "./pages/IdnHealthSystemDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/patient-journey" element={<PatientJourneyDetail />} />
          <Route path="/solutions/hcp-provider" element={<HcpProviderDetail />} />
          <Route path="/solutions/idn-health-system" element={<IdnHealthSystemDetail />} />
          <Route path="/products/chord" element={<ChordDetail />} />
          <Route path="/products/basis" element={<BasisDetail />} />
          <Route path="/products/lara" element={<LaraDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
