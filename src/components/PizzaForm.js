import React from 'react';
import { useHistory } from 'react-router-dom'
export default function PizzaForm(props) {
    const history = useHistory()
    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props
// console.log(props)
    const onSubmit = evt => {
        evt.preventDefault()
        history.push('/pizza');
        submit()
    }
    const onChange = evt => {
        const {name, value, checked, type} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    return (
        
        <div className="formContainer">
            <form id="pizza-form" className="pizza container submit" onSubmit={onSubmit}>
                <h2>Build your own Pizza</h2>                                    
                <div className="background">                
                </div>
                    <div className="error">
                        <div>{errors.name}</div>
                        <div>{errors.email}</div>
                        <div>{errors.size}</div>
                        <div>{errors.sauce}</div>
                        <div>{errors.topping}</div>
                        <div>{errors.instructions}</div>
                        <div>{errors.glutenFree}</div>
                    </div>
                    <div className="choices" id="size-dropdown">
                        <div className="choice">
                            <h3>Choice of Size</h3>
                            <h5>Required</h5>
                        </div>
                        <label>                                
                            <select 
                            name="size" 
                            onChange={onChange}
                            value={values.size}>
                                <option value="">-- Select Size --</option>
                                <option value="large">Large</option>
                                <option value="medium">Medium</option>
                                <option value="small">Small</option>
                            </select>
                        </label>
                    </div>
                    <div className="choices">
                        <div className="choice">
                            <h3>Choice of Sauce</h3>
                            <h5>Required</h5>
                        </div>
                        <div className="sauce">
                            
                        <label>
                            <input 
                            type="radio"
                            name="sauce"
                            value="original"
                            onChange={onChange}
                            checked={values.sauce === 'original'}
                            />
                            Original Red
                        </label>
                        <label>
                            <input 
                            type="radio"
                            name="sauce"
                            value="garlic"
                            checked={values.sauce === 'garlic'}
                            onChange={onChange}
                            />
                            Garlic Ranch
                        </label>
                        <label>
                            <input 
                            type="radio"
                            name="sauce"
                            value="bbq"
                            onChange={onChange}
                            checked={values.sauce === 'bbq'}
                            />
                            BBQ sauce
                        </label>
                        <label>
                            <input 
                            type="radio"
                            name="sauce"
                            value="spinach"
                            onChange={onChange}
                            checked={values.sauce === 'spinach'}
                            />
                            Spinach Alfredo
                        </label>
                        </div>
                    </div>                      
                    <div className="choices">
                        <div className="choice">
                            <h3>Choice of Topping</h3>
                            <h5>Choose up to 10 (At least 4)</h5>
                        </div>
                        <div className="topping">
                        <label>
                            <input
                                type='checkbox'
                                name='pepperoni'
                                checked={values.pepperoni}
                                onChange={onChange}
                                />        
                                Pepperoni
                        </label>          
                        <label>
                            <input
                                type='checkbox'
                                name='tomatos'
                                checked={values.tomatos}
                                onChange={onChange}
                                />        
                                Diced Tomatos
                        </label>
                        <label>
                            <input
                                type='checkbox'
                                name='sausage'
                                checked={values.sausage}
                                onChange={onChange}
                                />        
                                Sausage
                        </label>
                        <label>
                            <input
                                type='checkbox'
                                name='olives'
                                checked={values.olives}
                                onChange={onChange}
                                />        
                                Black Olives
                        </label>
                        <label>
                            <input
                                type='checkbox'
                                name='bacon'
                                checked={values.bacon}
                                onChange={onChange}
                                />        
                                Canadian Bacon
                        </label>
                        <label>
                            <input
                                type='checkbox'
                                name='garlic'
                                checked={values.garlic}
                                onChange={onChange}
                                />        
                                Roasted Garlic
                        </label>
                        <label>
                            <input
                                type='checkbox'
                                name='italianSausage'
                                checked={values.italianSausage}
                                onChange={onChange}
                                />        
                                Spicy Italian Sausage
                        </label>
                        <label>
                            <input
                                type='checkbox'
                                name='hearts'
                                checked={values.hearts}
                                onChange={onChange}
                                />        
                                Artichoke Hearts
                        </label>
                        <label>
                            <input
                                type='checkbox'
                                name='chicker'
                                checked={values.chicker}
                                onChange={onChange}
                                />        
                                Grilled Chicker
                        </label>
                        <label>
                            <input
                                type='checkbox'
                                name='cheese'
                                checked={values.cheese}
                                onChange={onChange}
                                />        
                                Three Cheese
                        </label>
                        <label>
                            <input
                                type='checkbox'
                                name='onions'
                                checked={values.onions}
                                onChange={onChange}
                                />        
                                Onions
                        </label>
                        <label>
                            <input
                                type='checkbox'
                                name='pineapple'
                                checked={values.pineapple}
                                onChange={onChange}
                                />        
                                Pineapple
                        </label>
                        <label>
                            <input
                                type='checkbox'
                                name='pepper'
                                checked={values.pepper}
                                onChange={onChange}
                                />        
                                Green Pepper
                        </label>
                        <label>
                            <input
                                type='checkbox'
                                name='exCheese'
                                checked={values.exCheese}
                                value={values.exCheese}
                                onChange={onChange}
                                />        
                                Extra Cheese
                        </label>
                        </div>
                    </div>
                    <div className="choices">
                        <div className="choice">
                            <h3>Choice of Substitute</h3>
                            <h5>Choose up to 1</h5>
                        </div>
                        <label>
                            <input 
                            type="checkbox" 
                            name="glutenFree"
                            value={values.glutenFree}
                            />
                            Gluten Free Crust (+ $1.00)
                        </label>
                    </div>
                    <div className="choices" id="special-text">
                        <div className="choice">
                            <h3>Special Instructions</h3>
                        </div>
                        <label>
                            <input
                            placeholder="Anything else you'd like to add?"
                            name="instructions"
                            type="text"
                            value={values.instructions}
                            onChange={onChange}
                            />
                        </label>
                    </div>
                    <div className="choices" id="name-input">
                        <div className="choice">
                            <h3>Name</h3>
                        </div>
                        <label>
                            <input
                            placeholder="Input your name"
                            name="name"
                            type="text"
                            value={values.name}
                            onChange={onChange}
                            />
                        </label>
                        <div className="choice">
                            <h3>Email</h3>
                        </div>
                        <label>
                            <input
                            placeholder="Input your email"
                            name="email"
                            type="email"
                            value={values.email}
                            onChange={onChange}
                            />
                        </label>
                    </div>                                    
                    <button id="order-button" disabled={disabled} onSubmit={onSubmit} >
                        SUBMIT
                    </button>                
            </form>
        </div>
    )
}