import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {
    const history = useHistory();

    const toForm = () => {
      history.push('/pizza-form');
    }
  
    return (
        <div className='home-wrapper'>
        <div className="background">
        <img
        className='home-image'
        src='../Assets/Pizza.jpg'
        alt='pizza'
      />
        <button
          onClick={toForm}
        >
          Pizza???
        </button>
        </div>
      </div>
    )
}