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
                <h4 onClick={toForm}>
                    Pizza?
                </h4>
            </div>
      </div>
    )
}