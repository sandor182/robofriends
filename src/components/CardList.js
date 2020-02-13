import React from 'react';
import Card from './Card';
// import { robots } from './robots';

const CardList = ({ robots }) => {
  // check if errorboundry works
  // if (true) {
  //   throw new Error('NOOOO!');
  // }
  return (
    <div>
      {robots.map((user, index) => {
        return (
          <Card
            key={index}
            id={robots[index].id}
            name={robots[index].name}
            email={robots[index].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
