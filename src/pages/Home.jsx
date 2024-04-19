import { useCallback, useEffect, useState } from "react";
import Spotlight from "../components/Spotlight";
import scrollUp from "../assets/img/icons/scroll-up.png";
import Carousel from "../components/Carousel";
import { requests } from "../Request";

function Home() {
    const [movieList, setMovieList] = useState([]);

    const getMovies = useCallback(() => {
        fetch(requests.discovery)
            .then(res => res.json())
            .then(json => setMovieList(json.results));
    }, []);

    useEffect(() => {
        getMovies();
    }, [getMovies]);


    const spotlightMovies = movieList.splice(0, 5);
}

export default Home;