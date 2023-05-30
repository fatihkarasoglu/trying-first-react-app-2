import { useField } from "formik";

export default function Select({ label, options, ...props }) {

    const [field, meta, helpers] = useField(props)

    return(
        <label className="block w-full">
            <div className="text-m text-gray-600"> { label } </div>
            <select className="w-full h-10 border-b outline-none focus:border-black" {...props} {...field}>
                {options.map((option, key) => (
                    <option value={option.key} key={key}>{option.value}</option>
                ))}
            </select>
        </label>
    )
}