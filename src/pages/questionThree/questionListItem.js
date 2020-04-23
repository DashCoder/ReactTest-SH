/* Comments:

1) Converted to ES6 function component
2) QuestionListItem starts with Capital Q to avoid warnings  
3) Fragment should be react.fragment
4) <div> cannot appear as a descendant of p - incorrect dom tree hierarchy
Solution : Property e.g. component={'span'} added to <Typography>...</Typography>, div changed to span

*/

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';


const QuestionListItem = (props) => {

  const useStyles = makeStyles({
	header: {
		fontWeight: 'bold',
		display: 'inline',
		marginRight: 4,
	},
	label: {
		display: 'inline',
	},
  });


  const {species, name, icon, description, id} = props.item; 
  const divider  = props.divider;
  const Icon = icon;
  const classes = useStyles();


  return (
		    <React.Fragment>
				<ListItem alignItems="flex-start" >
					<ListItemAvatar>
						<Avatar>
						<Icon/>
						</Avatar>
					</ListItemAvatar>
					<ListItemText component={'div'}
						primary={`${name}: ${species? species : 'Other'}`}
						secondary={
							<React.Fragment>
								<span>
									<Typography
										component={'span'}
										variant="subtitle2"
										className={classes.header}
									>
										Description:
									</Typography>
									<Typography 
										component={'span'}
										variant="body2"
										className={classes.label}
									>
										{description}
									</Typography>
								</span>
								<br/>
								<span>
									<Typography
										component={'span'}
										variant="subtitle2"
										className={classes.header}
									>
										Guid:
									</Typography>
									<Typography
										component={'span'}
										variant="body2"
										className={classes.label}
									>
										{id ? id : 'ERROR '}
									</Typography>
								</span>

							</React.Fragment>
						}
					/>
				</ListItem>
				{divider && <Divider variant="middle" />}
            </React.Fragment>
  );

};

export default QuestionListItem;