import { useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
    const { id } = useParams();

    const fetchMovieDetails = async (id) => {
        const url = `https://moviesdatabase.p.rapidapi.com/titles/series/${id}`;
        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchMovieDetails(id);
        console.log(id);
    }, []);
    return <div>MovieDetails</div>;
};

export default MovieDetails;
