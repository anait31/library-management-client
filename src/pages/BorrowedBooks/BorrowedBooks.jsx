import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import axios from "axios";

const BorrowedBooks = () => {
    const { user } = useContext(AuthContext);
    const [myBorrowerdBooks, setMyBorrowerdBooks] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/borrowed-books?email=${user?.email}`)
            .then(data => setMyBorrowerdBooks(data.data))
    }, [user?.email])
    return (
        <div>
            <p>{myBorrowerdBooks?.length}</p>
        </div>
    );
};

export default BorrowedBooks;