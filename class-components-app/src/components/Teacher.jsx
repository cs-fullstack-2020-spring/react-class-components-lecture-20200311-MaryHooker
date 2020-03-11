import React, {Component} from 'react';

class Teacher extends Component{
    render()
    {
        return(
            <div className='redText'>
                <p>Teacher: {this.props.teacherName}</p>
            </div>
        )
    }
}

export default Teacher;