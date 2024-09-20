import Miscellaneous from "./Miscellaneous"
import Product from "./Product"
import Specification from "./Specification"

function App() {
  return (
    <>
      <Product 
        modelName="KB X1000"
        overview="The KB-X1000 is a high-performance mechanical keyboard designed for gamers, 
        professionals, and everyday users who demand precision and comfort. It features customizable RGB 
        backlighting, durable mechanical switches, and programmable keys to enhance your typing and gaming 
        experience."
      />
      <Specification 
        modelName="KB X1000"
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
      <Miscellaneous 
        modelName="KB X1000"
        warrantyYears={2}
        custSuppNo="1-800-555-1234"
        website="www.keyboardcompany.com"
        custSuppEmail="1-800-555-1234"
      />
    </>
  )
}

export default App
