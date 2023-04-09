import './app-select.css'

import {useRef, useEffect} from "react";

function AppSelect({options, onChange}) {
    const select = useRef(null)

    useEffect(() => {
        select.current.selectedIndex = -1
    }, [])

    const changeHandler = (e) => {
        onChange(e.target.value)
    }

    return (
        <select className="app-select" ref={select} onChange={changeHandler}>
            {options.map((option, i) => <option value={option.id} key={i}>{option.title}</option>)}
        </select>
    )
}

export default AppSelect