import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"; 
import { Button } from '@mui/material';
import "./Result.css"

const Result = ({ name, score }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);

  return (
    <>
      <div className='result'>
        <span className='title'>Final Score: {score}</span>
        <span className='name'>Congratulations, {name}!</span>
        <Button 
          variant='contained'
          color="secondary"
          size="large"
          style={{ alignSelf: "center", marginTop: 20 }}
          onClick={() => navigate("/")} 
        >
          Go To HomePage
        </Button>
      </div>
    </>
  );
}


export default Result