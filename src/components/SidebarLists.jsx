import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import AddchartIcon from '@mui/icons-material/Addchart';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';


export const mainListItems = (
    <React.Fragment>
      <ListItemButton component={Link} to="/">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Activity" />
      </ListItemButton>
      <Divider sx={{ my: 3 }} />
      <ListItemButton component={Link} to="/trending-news">
        <ListItemIcon>
          <TrendingUpIcon/>
        </ListItemIcon>
        <ListItemText primary="Trendig News" />
      </ListItemButton>
      <Divider sx={{ my: 3 }} />
      <ListItemButton component={Link} to="/add-news" >
        <ListItemIcon>
          <AddchartIcon/>
        </ListItemIcon>
        <ListItemText primary="Add News" />
      </ListItemButton >
      <Divider sx={{ my: 3 }} />
      <ListItemButton component={Link} to="/show-report">
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="News Report" />
      </ListItemButton>
      <Divider sx={{ my: 3 }} />
      <ListItemButton>
        <ListItemIcon>
          <ManageHistoryIcon />
        </ListItemIcon>
        <ListItemText primary="Manage Content" />
      </ListItemButton>
    </React.Fragment>
  );

export const secondaryListItems = (
    <React.Fragment>
      <ListSubheader component="div" inset>
        Saved reports
      </ListSubheader>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Current month" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Last quarter" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Year-end sale" />
      </ListItemButton>
    </React.Fragment>
  );