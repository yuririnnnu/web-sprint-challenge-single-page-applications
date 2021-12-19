import React from 'react';

export default function Pizza(props){
    const { details} = props
    return (
        <div className='user container'>
            <div className="background">
                <h1>Your pizza is on its way!</h1>
            </div>
            <h3>Ordered from {details.name} </h3>
            <p>Email: {details.email}</p> 
            <p>Size: {details.size}</p>
            <p>Sauce: {details.sauce}</p>
            {
                details.topping.map((top, idx)=> {
                    return (
                        <p>Topping{idx + 1}: {top},</p>
                    )
                })                                                
            }
                        
            <p>Special Instruction: {details.instructions}</p>
        </div>
    )
}

