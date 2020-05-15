import React from 'react';

const Teammembers = props => {

    return (
        <div className="team-list">
            {props.teammembers.map((teammember) => {
                return (
                <div className="teammember" key={teammember.id}>
                    <h2>{teammember.name}</h2>
                    <p>{teammember.email}</p>
                    <p>{teammember.role}</p>
                </div>
                );
            })}
        </div>
    )
}

export default Teammembers;