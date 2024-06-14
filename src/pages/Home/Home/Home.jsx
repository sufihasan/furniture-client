import Advertised from "../Advertised/Advertised";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import DonetFurniture from "../DonetFurniture/DonetFurniture";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertised></Advertised>
            <Categories></Categories>
            <DonetFurniture></DonetFurniture>
        </div>
    );
};

export default Home;