import React from 'react'
import { createStyleSheet } from 'jss-theme-reactor';

export const styleSheet = createStyleSheet('App', (theme) => ({
  root: {
    backgroundColor: 'red',
    minWidth: 100,
    minHeight: 200,
  },
}));

const App = (props, context) => {
  console.log(context);
  const classes = context.styleManager.render(styleSheet);
  return (
    <div className={classes.root}>

    </div>
  )
}

App.contextTypes = {
  styleManager: React.PropTypes.object,
};

export default App