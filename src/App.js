import Nav from "./Nav"
import Main from "./Main"
import Footer from "./Footer"
export default function App() {
    return(
    
        <div className="container">
            <div className= "back-container">
                <Nav />
                <Main />
            </div>
            <Footer />
        </div>
    )
}