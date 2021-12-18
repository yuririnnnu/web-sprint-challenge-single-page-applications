import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required("name must be at least 2 characters")
    .min(2, "name must be at least 2 characters"),
    email: yup
    .string()
    .email('Gotta be a valid email address!'),
    size: yup
    .string()
    .oneOf(['large','medium','small'],'Choose pizza size'),
    sauce: yup
    .string()
    .oneOf(['original', 'garlic', 'bbq', 'spinach'],'Choose pizza sauce'),
    pepperoni: yup.boolean(),
    tomatos: yup.boolean(),
    sausage: yup.boolean(),
    olives: yup.boolean(),
    bacon: yup.boolean(),
    garlic: yup.boolean(),
    italianSausage: yup.boolean(),
    hearts: yup.boolean(),
    chicker: yup.boolean(),
    cheese: yup.boolean(),
    onions: yup.boolean(),
    pineapple: yup.boolean(),
    pepper: yup.boolean(),
    exCheese: yup.boolean(),
    glutenFree: yup.boolean(),
    instructions : yup
    .string()
    .trim()
})

export default formSchema;