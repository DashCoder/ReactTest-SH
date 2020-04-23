/* Comments:
  A minimum of four issues to fix in this source file
*/

import React, { useState, useEffect } from "react";
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import {CardMedia} from "@material-ui/core";


const QuestionFour = () => {

  const [state, setState] = useState({id: 1});


  const fetchData = async () => {
    const response = await fetch("http://localhost:3001/example?id=" + props.id);
    setState(response.json());
  }

  useEffect(() => {
    fetchData(state.id);
  }, [state.id]);

  if (!state) {
    return "loading...";
  }


  return (
		<div>
			<Typography variant="h4" gutterBottom>
				Question Four
			</Typography>
			<Typography variant="h5" gutterBottom>
				Please find issues with this example. When working a dog should display in middle of screen.
			</Typography>
			<Typography variant="body1" gutterBottom>
			</Typography>

			<CardMedia
				image={state.imgSrc}
				style={{
					width: '50%',
					height: 250,
					backgroundSize: 'contain',
				}}
				title="state.title"
			/>
		</div>

  );
}

export default QuestionFour