import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import GetCalculator from "./GetCalculator";
import NewsList from "./NewsList";
import NewsArticle from "./NewsArticle";
import SourceSelection from "./SourceSelection";
import YieldtoPrice from "./yieldtoprice";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width:"100%",
    alignItems:"center",
    
  },
  appBarStyle:{
      backgroundColor:"white",
      color:'blue'
  },
  customtwo:{
      marginLeft:100,
  }

}));

export default function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const[source,setsource]=React.useState("")
  
  const handleSourceChange=(value)=> {
    setsource(value);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBarStyle}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" indicatorColor="primary">
          <Tab label="GET Settlement calculator" {...a11yProps(0)} />
          <Tab label="P2Y Calculator" {...a11yProps(1)} className={classes.customtwo} />
          <Tab label="Generate cashflow P2Y calculator" {...a11yProps(2)} />
          <Tab label="Y2P calculator" {...a11yProps(3)} className={classes.customtwo}/>
          <Tab label="Generate cashflow Y2P calculator" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <GetCalculator/>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <NewsList/>
      </TabPanel>
      <TabPanel value={value} index={2}>
       <NewsArticle/>
      </TabPanel>
      <TabPanel value={value} index={3}>
       <SourceSelection/>
      </TabPanel>
      <TabPanel value={value} index={4}>
       <YieldtoPrice/>
      </TabPanel>
    </div>
  );
}
