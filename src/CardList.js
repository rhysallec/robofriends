import React from 'react';
import Card from './Card'

const CardList = ( {robots}) => {
    const CardComponet = robots.map((user , i) => {
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    })

    return(
        <div>
            {CardComponet}
        </div> 

    );
}
export default CardList;