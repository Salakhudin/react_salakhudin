"use clinet";

import React, { useState, useEffect } from 'react';
import { Button, CardText, Stack, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import MovieCard from "./MovieCard";
import MovieForms from "./MovieForms";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 text-center">
          <h1 style={{ fontSize: "24px", color: "blue" }}>Home Movie List</h1>
          <h2 style={{ fontSize: "20px", color: "green" }}>Salakhudin</h2>
          <h3 style={{ fontSize: "18px", color: "red" }}>Pemprograman Web</h3>

          <Stack direction="horizontal" gap={2}>
            <Button as="a" variant="primary">
              Button as link
            </Button>
            <Button as="a" variant="success">
              Button as link
            </Button>
          </Stack>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          <br />
          <MovieForms />
          <br />
        </div>
      </div>
      <div className='bg-danger' >
        <MovieCard />
      </div>
    </div>
    
    // <br />
    // <MovieSlide />
    // <br />



  );
}