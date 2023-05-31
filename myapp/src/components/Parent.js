import { useState } from "react";
import Child from "./Child";

function Parent() {
    const [value, setValue] = useState("");

    console.log(value)
    const changeInput = (e) => {
        setValue(e.target.value);
    }

    return <Child value={value} changeInput={changeInput} />
}

export default Parent;



