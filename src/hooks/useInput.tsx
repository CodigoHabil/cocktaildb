import { useState } from "react"


const useInput = (prop:{type:string, defaultValue:string}) => {
    const [value, setValue] = useState<string>(prop.defaultValue);

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return {
        value,
        onChange,
        type: prop.type,
    }
}

export default useInput