import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Categories from "../../components/Categories/Categories";

const Home = () => {

    return (
        <div>
            <Categories></Categories>
        </div>
    );
};

export default Home;