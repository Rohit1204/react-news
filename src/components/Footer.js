import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/ArrowDropDownCircle';
import FinishIcon from '@material-ui/icons/Flag';
import GoalIcon from '@material-ui/icons/Add';
import TargetIcon from '@material-ui/icons/Dashboard';
import LocationOnIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0, 
    zIndex: 999,
  },
  ask:{
  borderRadius:"50%",

  }
  
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(3);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Dashboard" icon={<TargetIcon />} />
      <BottomNavigationAction label="Future" icon={<FinishIcon />} />
      <BottomNavigationAction  label="ASk" icon={<GoalIcon className={classes.ask} />}  />
      <BottomNavigationAction label="Advisory" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Explore" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
