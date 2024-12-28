import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Categories from "../../components/Categories/Categories";
import Slider from "../../components/Slider/Slider";
import Facilities from "../../components/Facilities/Facilities";
import Members from "../../components/Members/Members";

const Home = () => {

    return (
        <div>
            <div>
                <Slider></Slider>
            </div>
            <div className="container mx-auto">
                <Categories></Categories>
                <Facilities></Facilities>
                <Members></Members>
            </div>
        </div>
    );
};

export default Home;