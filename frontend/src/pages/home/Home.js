import NavBar from "../../components/navbar/NavBar"
import "./home.css"
import Header from "../../components/header/Header"
import Featured from "../../components/featured/Featured"
import PropertyList from "../../components/propertyList/PropertyList"

const Home = () => {
  return (
    <>
        <NavBar></NavBar>
        <Header></Header>
        <div className="homeContainer">
            <Featured></Featured>
            <h1 className="homeTitle">Browse by property type</h1>
            <PropertyList></PropertyList>
            <h1 className="homeTitle">Home guests love</h1>
        </div>
    </>   
  )
}

export default Home