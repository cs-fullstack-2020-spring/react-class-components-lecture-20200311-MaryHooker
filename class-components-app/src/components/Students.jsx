import React, {Component} from 'react';

class Students extends Component{
    render(){
        return(
            <div>
                <p className='orangeText'>Student: {this.props.studentName}</p>
            </div>
        )
    }
}

export default Students;