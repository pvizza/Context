import React, { useContext, useState } from 'react';
import { Context } from './ApiContext';

const CardTwo = () => {
  const reedContext = useContext(Context);
  return (
    <div>
      im card two {reedContext.theme}
      <button onClick={reedContext.callback}>change theme Callback</button>
    </div>
  );
};

export default CardTwo;
