import React, { useEffect, useState, useRef } from 'react'

const GeneralCompanyInfo = (props) => {
    const baseInfo = {
        companyName: '',
        companyBio: '',
    }
    const [companyInfo, setCompanyInfo] = useState(baseInfo);
    const callbackCalled = useRef(false);

    const onChange = (key, val) => {
        setCompanyInfo({...companyInfo, [key]: val});
        callbackCalled.current = false;
    }
    const sendData = () => {
        props.sendData(companyInfo);
    }
    useEffect(() => {
        if(!callbackCalled.current){
            sendData();
            callbackCalled.current = true;
        }
    });

    return (
        <div>
            <label className="block font-bold mb-2 text-gray-700" htmlFor="name">
            Company Name:
            </label>
            <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your company name"
            onChange={(e) => {
                onChange('companyName', e.target.value);
            }}/>
            <label className="block font-bold mb-2 text-gray-700" htmlFor="bio">
            Company Bio:
            </label>
            <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="bio"
            placeholder="Enter your company's bio"
            rows="5"
            onChange={(e) => {
                onChange('companyBio', e.target.value);
            }}/>
        </div>
  )
}

export default GeneralCompanyInfo