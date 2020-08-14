import React, { useState, PureComponent } from 'react';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from "prop-types";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CreateIcon from '@material-ui/icons/Create';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { changePage } from '../actions/page';
import { connect } from 'react-redux';
const MainListItems = ({ changePage }) => {

  return (<div>
    <ListSubheader inset>Blog Management</ListSubheader>
    <ListItem button onClick={() => {
      changePage(0)
    }} >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button onClick={() => {
      changePage(1)
    }}>
      <ListItemIcon>
        <CreateIcon />
      </ListItemIcon>
      <ListItemText primary="New" />
    </ListItem>

  </div>
  )
}
// export const secondaryListItems = (
//   <div>
//     <ListSubheader inset>Saved reports</ListSubheader>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItem>
//   </div>
// );

MainListItems.propTypes = {
  changePage: PropTypes.func.isRequired
}

export default connect(null, { changePage })(MainListItems);