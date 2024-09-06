import Header from './Header'
import Body from './Body'
import Footer from './Footer'

export default function App() {
    return (
        <>
            <Header />
            <Body />
            <br />
            <Body name="Mark Simon" food="Lasagna" isHealthy={false} age={19} />
            <br />
            <Body name="R J" food="Chop Suey" isHealthy={true} age={100} />
            <br />
            <Body name="Frenzhel" food="Boiled Egg" isHealthy={true} age={23} />
            <br />
            <Body name="James" food="Burger" isHealthy={false} age={18} />
            <br />
            <Body name="William" food="Fried Chicken" isHealthy={false} age={18} />
            <Footer />
        </>
    )
}