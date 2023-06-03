import * as Yup from "yup";

Yup.setLocale({
    mixed: {
        required: 'Bu alanı doldurmanız zorunludur!',
        oneOf: 'Kuralları kabul etmelisiniz!'
    },
    string: {
        min: 'Bu alan en az ${min} karakter olmalıdır!',
        max: 'Bu alan en fazla ${max} karakter olmalıdır!'
    }
})

export default Yup;