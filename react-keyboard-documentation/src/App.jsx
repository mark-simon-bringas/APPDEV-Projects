import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Specification from "./pages/Specification";
import Features from "./pages/Features";
import Setup from "./pages/Setup";
import Usage from "./pages/Usage";
import Troubleshooting from "./pages/Troubleshooting";
import Maintenance from "./pages/Maintenance";
import Warranty from "./pages/Warranty";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" 
            element={
              <Product 
                modelName="KB-X1000"
                overview="The KB-X1000 is a high-performance mechanical keyboard designed for gamers, 
                professionals, and everyday users who demand precision and comfort. It features customizable RGB 
                backlighting, durable mechanical switches, and programmable keys to enhance your typing and gaming 
                experience."
              />
            } 
          />
          <Route path="/specification"
            element={
              <Specification 
                modelName="KB-X1000"
                switchType="Cherry MX Red (Mechanical)" 
                keyLayout="Full-size"
                keyCount={104}
                backlighting="RGB with customizable colors"
                connectivity="Wired (USB 2.0)"
                dim1={440}
                dim2={135}
                dim3={35}
                weight={1.2}
                cableLength={1.8}
                additionalFeatures="Anti-ghosting, N-key rollover, dedicated media controls"
              />
            }
          />
          <Route path="/features" element={<Features modelName="KB-X1000" />} />
          <Route path="/setup" element={<Setup modelName="KB-X1000" />} />
          <Route path="/usage" element={<Usage modelName="KB-X1000" />} />
          <Route path="/troubleshooting" element={<Troubleshooting modelName="KB-X1000" />} />
          <Route path="/maintenance" element={<Maintenance modelName="KB-X1000" />} />
          <Route path="/warranty"
            element={
              <Warranty
                warrantyYears={2}
                custSuppNo="1-800-555-1234"
                website="www.keyboardcompany.com"
                custSuppEmail="1-800-555-1234"
                modelName="KB-X1000"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App