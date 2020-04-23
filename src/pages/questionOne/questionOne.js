/* 
Comments: 

1) Use of standard ES6 function component instead of React.Component where possible, state supported by useState 
2) Use ES6 Spread Operator to maintain label value

Note: 
Currently Using react 16.10.2. 
Hooks are a new addition in React 16.8. Hooks let you use state and other React features without using a react class. 

*/

import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

const QuestionOne = () => {
 
  const [state, setState] = useState({
  	 label: "I've been clicked: ",
	 counter: 0
  });

  const handleOnClick = () => {
    setState({
      ...state,
	  counter: state.counter + 1
    });
  };

  return (
	<div style={{marginTop: 48}}>
		<Button variant="contained" onClick={handleOnClick}  >
			{state.label} {state.counter} times
		</Button>
	</div>
  );

};


export default QuestionOne;