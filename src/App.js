import React, {useState, useEffect} from "react";
import { Route, Link, Switch} from "react-router-dom";
import Home from "./components/Home";
import schema from './validation/formSchema';
import Pizza from "./components/Pizza";
import PizzaForm from "./components/PizzaForm";

import * as yup from 'yup';

const initialFormValues = {
  name: '',
  email: '',
  size: '',
  sauce: '',
  topping: '',
  instructions: '',
  glutenFree: false
}
const initialErrorForm = {
  name: '',
  email: '',
  size: '',
  sauce: '',
  topping: '',
  instructions: '',
  glutenFree: false
}
const initialPizzas = []
const initialDisabled = true

const App = () => {
  // const match = useRouteMatch();  
  const [ pizzas, setPizzas ] = useState(initialPizzas)
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const [ formErrors, setFormErrors ] = useState(initialErrorForm)
  const [ disabled, setDisabled ] = useState(initialDisabled)

  const postNewPizza = newPizza => {
    setPizzas(newPizza);
    setFormValues(initialFormValues);
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name] : value
    })
  }

  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      size: formValues.size.trim(), 
      sauce: formValues.sauce.trim(), 
      topping: ['pepperoni', 'tomatos','olives', 'sausage',
                'bacon','garlic','italianSausage',
                'hearts','chicker','cheese','onions',
                'pineapple','pepper','exCheese']
                .filter(top => !!formValues[top]),
      instructions: formValues.instructions.trim(),  
      glutenFree: formValues['glutenFree'],
    }
    console.log(newPizza)
    postNewPizza(newPizza)
  }


  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])
  return (
    <div className="App">      
      <header>
        <h1 className='store-header'>Yum Yum Pizza</h1>      
        <div className='nav-links'>
          <nav>    
            <Link to='/'>Home</Link>      
            <Link to='/pizza'>Order</Link>     
          </nav>                    
        </div>
      </header>
      <Switch>
        <Route path='/pizza-form' >
          <PizzaForm
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
          />
        </Route>
        <Route exact path="/">
          <Home />
        </Route >
        <Route path="/pizza">
          <Pizza key={pizzas.id} details={pizzas} />  
        </Route>
      </Switch>
      
    
      
    </div>
  );
};
export default App;
