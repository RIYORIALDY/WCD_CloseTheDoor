import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Features from "./pages/Features";
import Creators from "./pages/Creators";
import Privacy from "./pages/Privacy";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

// Penjelasan:
// Kode App.tsx ini SUDAH BENAR menambahkan route FAQ di path "/faq".
// Jika menu FAQ tidak muncul di header, masalahnya ada di file header/navbar, bukan di App.tsx.
// Pastikan di komponen header (misal di setiap halaman seperti Creators.tsx, FAQ.tsx, dsb) ada <Link to="/faq">FAQ</Link> di dalam <nav>.
// Contoh baris yang benar di header:
// <Link to="/faq" className="text-white px-4 py-2 hover:text-gray-300 transition-colors nav-link" style={{ margin: "0 30px 0 30px" }}>FAQ</Link>

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/creators" element={<Creators />} />
          <Route path="/features" element={<Features />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/faq" element={<FAQ />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
