import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Categories from "../../components/Categories/Categories";
import Slider from "../../components/Slider/Slider";

const Home = () => {

    return (
        <div>
            <div>
                <Slider></Slider>
            </div>
            <div className="container mx-auto">
                <Categories></Categories>
            </div>
        </div>
    );
};

export default Home;