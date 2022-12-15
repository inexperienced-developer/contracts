import React, { Component } from 'react'
import GeneralCompanyInfo from './GeneralCompanyInfo'
import Select from './Select'
import ProjectDetails from './ProjectDetails';
import { SaveProfileToDB } from '../../hooks/firestore';

export class InputProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            projectCount: 1,
        };
        this.getData = this.getData.bind(this);
    }

    getData(val){
        // do not forget to bind getData in constructor
        this.setState({...this.state, ...val})
        console.log(this.state);
    }

    addProject() {
        // let newProjectCount = this.state.projectCount += 1;
        this.setState(this.state = {
            projectCount: this.state.projectCount + 1
        });
        // alert(`Project added: ${this.state.projectCount}`);
    }

    render() {
        return (
            <div>
                <form className="mx-auto max-w-sm">
                    <GeneralCompanyInfo sendData={this.getData}/>
                    <Select options={['Software', 'Aerospace', 'Custodial']} other={true} sendData={this.getData}/>
                    <ProjectDetails sendData={this.getData}/>
                    <button
                    className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={async (e) => {
                        e.preventDefault();
                        await SaveProfileToDB(this.state);
                    }}>Firestore</button>
                    <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">Submit</button>
                </form>
            </div>
        )
  }
}

export default InputProfile