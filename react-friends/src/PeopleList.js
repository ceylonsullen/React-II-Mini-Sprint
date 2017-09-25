import React from 'react';


export const PeopleList = (props) => {
    return (<div>
        {props.people.map((person) => {return <div>
            <div>{person.first_name}</div>
            <div>{person.last_name}</div>
            <div>{person.email}</div>
        </div>})}
    </div>)
};