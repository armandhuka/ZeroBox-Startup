<<<<<<< HEAD
=======

>>>>>>> 214b9b1e277fd97d6e9d5cd6c1bb70ff4f2eeb83
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
<<<<<<< HEAD
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
=======
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import Thanku from "./pages/thank";
>>>>>>> 214b9b1e277fd97d6e9d5cd6c1bb70ff4f2eeb83
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
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
<<<<<<< HEAD
          <Route path="/terms" element={<TermsAndConditions />} />
=======
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/thanku9265350594" element={<Thanku/>} />
>>>>>>> 214b9b1e277fd97d6e9d5cd6c1bb70ff4f2eeb83
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
