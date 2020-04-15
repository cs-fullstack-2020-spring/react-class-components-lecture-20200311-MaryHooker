import React, {Component} from 'react';

class Students extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <p className='orangeText'>Student: {this.props.studentName}</p>
            </div>
        )
    }
}

export default Students;