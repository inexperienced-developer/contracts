import React, { useEffect, useRef, useState } from 'react'

const Select = (props) =>  {
    const baseField = {
        companyField: ''
    };
    const [field, setField] = useState(baseField);
    const callbackCalled = useRef(false);

    const onChange = (key, val) => {
        setField({...field, [key]: val});
        callbackCalled.current = false;
    }
    const sendData = () => {
        props.sendData(field);
    }
    useEffect(() => {
        if(!callbackCalled.current){
            sendData();
            callbackCalled.current = true;
        }
    });

    return (
        <div>
            <label className="block font-bold mb-2 text-gray-700" htmlFor="field">
            Company Field:
            </label>
            <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:outline-none focus:shadow-outline"
            id="field"
            defaultValue=''
            onChange={(e) => onChange('companyField', e.target.value)}>
                <option value=''>Select an option</option>
                {
                    props.options.map((option) => {
                        return(
                        <option value={option.toLowerCase()} key={`val-${option.toLowerCase()}`}>{option}</option>
                        )
                    })
                }
                {
                    props.other === true && (
                        <option value='other'>Other</option>
                    )
                }
            </select>
            {
                        field.companyField.startsWith('other') && (
                        <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="other-text"
                        type="text"
                        placeholder="Explain"
                        onChange={(e) => onChange('companyField', 'other:' + e.target.value)}/>
                    )
                }
        </div>
    )
}

export default Select