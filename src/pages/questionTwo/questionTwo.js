/* 
Comments:  
1) Use of standard ES6 function component instead of React.Component where possible, state supported by useState
2) Using props or setState without "old school" contructor 
3) Axios is promised based library - easy to do promises in useEffect Hook, complexity not needed 
4) Use ES6 Spread Operator to maintain label value

*/

import React, { useState, useEffect } from 'react'; 
import axios from "axios"; // New here simplified

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import CircularProgress from '@material-ui/core/CircularProgress';

/* import { getCardDetails } from './api' */
import styles from './styles'

const QuestionTwo = (props) => {
 
    const [state, setState] = useState({
		title: null,
		imgSrc: null,
		body: '',
		loading: true,
    });

    const { classes } = props;

    /* Every time rendered with state changed, reload cards */
    useEffect(() => {
        if (state.loading) {
	        axios.get('http://localhost:3001/example').then((result)=>{
				const {title, body, imgSrc} = result.data;
				setState({
					title:  title,
					imgSrc: imgSrc,
					body: body,
					loading: false,
				})
	        });
        }

    },[state.loading]);

	if(state.loading){
		return (
			<div className={classes.spinner}>
				<CircularProgress/>
			</div>
		)
	}
		return(
			<div className={classes.container}>
				<Card className={classes.card}>
					<CardMedia
						className={classes.media}
						image={state.imgSrc}
						title={state.title}
					/>
					<CardContent className={classes.content}>
						<Typography gutterBottom variant="h5" component="h2">
							{state.title}
						</Typography>
						<div
							className={classes.body}
							dangerouslySetInnerHTML={{__html:state.body}}
						/>
					</CardContent>
				</Card>
			</div>
		)
	}


export default withStyles(styles)(QuestionTwo);
