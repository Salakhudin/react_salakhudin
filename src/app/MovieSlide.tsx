"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import { Inder } from 'next/font/google';


const MovieSlide = () => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/movies');
        console.log(response)
        
        setMovieData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
        // Handle error
      }
    };

    fetchData();
  }, []);
  
  return ( <Carousel>
    {movieData?.data.map((movie, Index) => (
      <Carousel.Item key={Index}>
      <img
      className="d-clock w-100"
      src={movie.foto}
      alt={movieData.judul}
      />
      <Carousel.Caption>
        <h3>{movie.judul}</h3>
        <p>{movieData.sutradara}</p>
      </Carousel.Caption>
    ))}


  </Carousel>
  );
};


export default MovieSlide;