import React, {Component} from 'react';

class Teacher extends Component{
    constructor(props){
        super(props);
    }

    render()
    {
        return(
            <div className='redText'>
                <h3>Teacher: {this.props.teacherName}</h3>
            </div>
        )
    }
}

export default Teacher;