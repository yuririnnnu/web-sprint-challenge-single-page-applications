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
                <button onClick={toForm}>
                    Pizza?
                </button>
            </div>
      </div>
    )
}