import Hero from '../Components/Hero/Hero'
import SideBar from '../Components/SideBar/SideBar'
import Tab from '../Components/Tab/Tab'
import NewUserOffers from '../Components/NewUserOffers/NewUserOffers'
import Header from '../Components/Header/Header'
import Deals from '../Components/Deals/Deals'
function Home() {
    return (
        <>
            <Header />
            <SideBar />
            <div style={{ marginLeft: "230px", width: "calc(100% - 230px)", padding: 0 }}>
                <Hero />
                <Tab />
                <NewUserOffers />
                <Deals/>
            </div>
        </>
    )
}
export default Home;