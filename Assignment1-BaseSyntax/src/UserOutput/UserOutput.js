import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>My name is {props.name} and I am {props.age} years old. I was born and born and raised in {props.place}.
            Currently studying in the Netherlands to pursue my furthur education at {props.study}</p>

            <p>Quod graeci persius et mea, mel id unum minim. Ad mei erant aliquip elaboraret. At mea solet lobortis pertinax. 
               Pro euismod tibique at, ea nam alia quot intellegam. Pri conceptam mnesarchum percipitur ut, ne viris suscipit nam. 
               Graeci recteque an his, in pro volumus intellegam dissentiet, ut posse maiestatis adipiscing mel.
            </p>
        </div>
    )
}

export default userOutput;