import * as Yup from "yup";

Yup.setLocale({
    mixed: {
        required: 'Bu alanı doldurmanız zorunludur!'
    },
    string: {
        min: 'Bu alan en az ${min} karakter olmalıdır!'
    }
})

export default Yup;