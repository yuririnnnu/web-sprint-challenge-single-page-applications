import React, {useState, useEffect} from "react";
import axios from 'axios';
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

  const getUsers = () => {
    axios.get(`https://reqres.in/api/users`)
    .then(res => {
      console.log('get res.data.data', res.data.data)
      setPizzas(res.data.data)
    }).catch(err => console.error(err))
  }

  const postNewPizza = newPizza => {
    axios.post('https://reqres.in/api/users', newPizza)
    .then(res => {
      setPizzas([res.data, ...pizzas]);
    }).catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues))
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
      topping: ['pepperoni', 'tomatos','olives',
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
    getUsers()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])
  return (
    <div className="App">      
      <h1 className='title'>YumYum Pizza</h1>      
      <nav>    
        <Link to='/'>Home</Link>      
        <Link to='/pizza'>Order</Link>     
      </nav>                    
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
        </Route>
        <Route>
          <Pizza />
        </Route>
      </Switch>        
    </div>
  );
};
export default App;
