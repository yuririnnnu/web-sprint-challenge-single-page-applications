import React from 'react';

export default function PizzaForm(props) {

    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    const onChange = evt => {
        const {name, value, checked, type} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    return (
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
                    <h3>Choice of Size</h3>
                    <h5>Required</h5>
                    <label>                                
                        <select 
                        name="size" 
                        onChange={onChange}
                        value={values.size}>
                            <option value="large">Large</option>
                            <option value="medium">Medium</option>
                            <option value="small">Small</option>
                        </select>
                    </label>
                </div>
                <div className="choices">
                    <h3>Choice of Sauce</h3>
                    <h5>Required</h5>
                    <label>Original Red
                        <input 
                        type="radio"
                        name="sauce"
                        value="original"
                        onChange={onChange}
                        checked={values.sauce === 'original'}
                        />
                    </label>
                    <label>Garlic Ranch
                        <input 
                        type="radio"
                        name="sauce"
                        value="garlic"
                        onChange={onChange}
                        checked={values.sauce === 'garlic'}
                        />
                    </label>
                    <label>BBQ sauce
                        <input 
                        type="radio"
                        name="sauce"
                        value="bbq"
                        onChange={onChange}
                        checked={values.sauce === 'bbq'}
                        />
                    </label>
                    <label>Spinach Alfredo
                        <input 
                        type="radio"
                        name="sauce"
                        value="spinach"
                        onChange={onChange}
                        checked={values.sauce === 'spinach'}
                        />
                    </label>
                </div>                      
                <div className="choices">
                    <h3>Choice of Topping</h3>
                    <h5>Choose up to 10 (At least 4)</h5>
                    <label>Pepperoni
                        <input
                            type='checkbox'
                            name='pepperoni'
                            checked={values.pepperoni}
                            onChange={onChange}
                        />        
                    </label>          
                    <label>Diced Tomatos
                        <input
                            type='checkbox'
                            name='tomatos'
                            checked={values.tomatos}
                            onChange={onChange}
                        />        
                    </label>
                    <label>Sausage
                        <input
                            type='checkbox'
                            name='sausage'
                            checked={values.sausage}
                            onChange={onChange}
                        />        
                    </label>
                    <label>Black Olives
                        <input
                            type='checkbox'
                            name='olives'
                            checked={values.olives}
                            onChange={onChange}
                        />        
                    </label>
                    <label>Canadian Bacon
                        <input
                            type='checkbox'
                            name='bacon'
                            checked={values.bacon}
                            onChange={onChange}
                        />        
                    </label>
                    <label>Roasted Garlic
                        <input
                            type='checkbox'
                            name='garlic'
                            checked={values.garlic}
                            onChange={onChange}
                        />        
                    </label>
                    <label>Spicy Italian Sausage
                        <input
                            type='checkbox'
                            name='italianSausage'
                            checked={values.italianSausage}
                            onChange={onChange}
                        />        
                    </label>
                    <label>Artichoke Hearts
                        <input
                            type='checkbox'
                            name='hearts'
                            checked={values.hearts}
                            onChange={onChange}
                        />        
                    </label>
                    <label>Grilled Chicker
                        <input
                            type='checkbox'
                            name='chicker'
                            checked={values.chicker}
                            onChange={onChange}
                        />        
                    </label>
                    <label>Three Cheese
                        <input
                            type='checkbox'
                            name='cheese'
                            checked={values.cheese}
                            onChange={onChange}
                        />        
                    </label>
                    <label>Onions
                        <input
                            type='checkbox'
                            name='onions'
                            checked={values.onions}
                            onChange={onChange}
                        />        
                    </label>
                    <label>Pineapple
                        <input
                            type='checkbox'
                            name='pineapple'
                            checked={values.pineapple}
                            onChange={onChange}
                        />        
                    </label>
                    <label>Green Pepper
                        <input
                            type='checkbox'
                            name='pepper'
                            checked={values.pepper}
                            onChange={onChange}
                        />        
                    </label>
                    <label>Extra Cheese
                        <input
                            type='checkbox'
                            name='exCheese'
                            checked={values.exCheese}
                            value={values.exCheese}
                            onChange={onChange}
                        />        
                    </label>
                </div>
                <div className="choices">
                    <h3>Choice of Substitute</h3>
                    <h5>Choose up to 1</h5>
                    <label>
                        Gluten Free Crust (+ $1.00)
                        <input 
                        type="checkbox" 
                        name="glutenFree"
                        value={values.glutenFree}
                        />
                        {/* <span class="slider"></span> */}
                    </label>
                </div>
                <div className="choices" id="special-text">
                    <h3>Special Instructions</h3>
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
                    <h3>Name</h3>
                    <label>
                        <input
                        placeholder="Input your name"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={onChange}
                        />
                    </label>
                    <h3>Email</h3>
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
                <button id="order-button" disabled={disabled} onSubmit={onSubmit}>SUBMIT</button>
            
        </form>
    )
}