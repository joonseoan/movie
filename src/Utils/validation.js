import * as Yup from 'yup';

// Validation rule setup by using Yup lib.
export default Yup.object().shape({
    title: Yup.string()
        .trim('Remove sapce.')
        // I assumed that movie titles are composed by alphabet letter and numbers only
        // I assumed that the api server does not differentiate the uppercase and small letters for alphabet
        .matches(/[a-zA-Z0-9]/i, 'Must use number and alphabets only.')
        .required('You must enter title.'),
    year: Yup.string()
        .trim('Remove space')                         
        .matches(/^[0-9]/i, 'Must use number only')
        // I assumed that year input must be a 4-didit number
        .min(4, '4-digit year required')
        .max(4, 'Must use 4 digits')
});