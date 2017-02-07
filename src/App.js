import React from 'react'
import { createStyleSheet } from 'jss-theme-reactor';
import ToolBar from './Presentional/ToolBar';
import InboxList from './Presentional/InboxList';

export const styleSheet = createStyleSheet('App', (theme) => ({
  sections: {
    position: 'relative',
    top: '40px',
  },
}));

const App = (props, context) => {
  console.log(context);
  const classes = context.styleManager.render(styleSheet);
  return (
    <div className={classes.root}>
      <ToolBar />
      <div className={classes.sections}>
        <InboxList />
      </div>
    </div>
  )
}

App.contextTypes = {
  styleManager: React.PropTypes.object,
};

export default App