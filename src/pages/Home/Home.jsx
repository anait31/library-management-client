import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Categories from "../../components/Categories/Categories";
import Slider from "../../components/Slider/Slider";
import Facilities from "../../components/Facilities/Facilities";
import Members from "../../components/Members/Members";
import { Helmet } from "react-helmet";

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>LMT - Home</title>
            </Helmet>
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