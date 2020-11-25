import React, {useState, useEffect} from 'react';

import { useQuery, useMutation } from '@apollo/client';
import { GET_UNVERIFIED_CATCALLS, UPDATE_CATCALL, GET_CATCALLS } from '../api/queries'
import './Dashboard.css';
import AdminTable from './AdminTable';
import { v4 as uuidv4 } from 'uuid';

/**Material UI Imports */
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Gesture from '@material-ui/icons/Gesture';
import Storage from '@material-ui/icons/Storage';
import Delete from '@material-ui/icons/Delete';
import Settings from '@material-ui/icons/Settings';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});


function Dashboard() {

  const classes = useStyles();
  const [value, setValue] = React.useState('unverified'); //selected tab
  const [queryData, setQueryData] = useState('')
  /*What to do in case tab changes */
  const handleChange = (event, newValue) => {
    setValue(newValue);

  };

  const queryDictionary = {
    'unverified': GET_UNVERIFIED_CATCALLS,
    'chalk':
  }

  useEffect(() => {
    console.log(value);

  }, [value])

  let { loading, error, data } = useQuery(GET_UNVERIFIED_CATCALLS);

  // const getData = () => {
  //   if(selectedTab === 'unverified') return useQuery(GET_UNVERIFIED_CATCALLS)
  // }


  if (error) console.log(error);
  data && console.log(data.getUnfilteredCatcalls);



  const [updateCatcall] = useMutation(UPDATE_CATCALL);
  console.log('Obtained Data >>>>>', data);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error at Fetching Data</p>;
  return (
    <>
      <div className="header-footer"></div>
        <Paper square className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="admin navigation"
          >
            <Tab icon={<VerifiedUser />} label="Verify Pending" value='unverified' wrapped />
            <Tab icon={<Gesture />} label="To Chalk" value='chalk' wrapped/>
            <Tab icon={<Storage />} label="Databse" value='database' wrapped/>
            <Tab icon={<Delete />} label="Trash" value='trash' wrapped/>
            <Tab icon={<Settings />} label="Mod Settings" value='settings' wrapped/>
          </Tabs>
        </Paper>

        {data ? (<AdminTable data={data.getUnfilteredCatcalls} updateCatcall={updateCatcall} />) : (<h2>Loading...</h2>)}

      <div className="header-footer"></div>
    </>
  );
}
export default Dashboard;