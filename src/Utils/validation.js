import * as Yup from 'yup';

export default Yup.object().shape({
    title: Yup.string()
        .trim('Remove sapce.')
        .matches(/[a-zA-Z0-9]/i, 'Must use number and alphabets only.')
        .required('You must enter title.'),
    year: Yup.string()
        .trim('Remove space')                               
        .matches(/^[0-9]/i, 'Must use number only')
        .min(4, '4-digit year required')
        .max(4, 'Must use 4 digits')
});