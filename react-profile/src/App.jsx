import Details from "./Details"
import Footer from "./Footer"
import Picture from "./Picture"

function App() {
  return (
    <>
      <div className="app-bg"></div>
      <br />
      <Picture />
      <Details 
        name="Mark Simon Z. Bringas" 
        firstName="Mark Simon" 
        occupation="Software Developer" 
        school="University of Baguio" 
        program="Computer Science"
        age={19} 
      />
      <Footer />
    </>
  )
}

export default App
