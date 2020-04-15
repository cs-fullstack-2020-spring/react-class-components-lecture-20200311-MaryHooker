import React, {Component} from 'react';
import Teacher from './Teacher';
import Students from './Students';

class ClassRoom extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        const students = ['Jeff','Brandon','Chris','Charles'];
        return(
            <div>
                <h1 className = 'purpleText'>Example of class based component</h1>
                <hr/>
                <h2 className = 'pinkText'>Class Room: {this.props.classRoomName}</h2>
                <h3 className = 'greenText'>Cohort: {this.props.cohort}</h3>
                <hr/>
                <Teacher teacherName='Kevin'/>
                <h3 className='yellowText'>Student List:</h3>
                <div>
                    {
                        students.map(
                            (s) => {
                                return <Students studentName={s}/>
                            }
                        )
                    }
                </div>
                <Students studentName='Mary'/>
            </div>
        )
    }
}

export default ClassRoom;
