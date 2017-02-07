import React from 'react'
import { createStyleSheet } from 'jss-theme-reactor';

export const styleSheet = createStyleSheet('Toolbar', (theme) => ({
  root: {
    backgroundColor: theme.primaryColor,
    width: '100%',
    position: 'fixed',
    top: 0,
    height: 40,
    left: 0,
  },
}));

const ToolBar = (props, context) => {
    const classes = context.styleManager.render(styleSheet);
    return(
        <div className={classes.root}>
        </div>
    )
}

ToolBar.contextTypes = {
  styleManager: React.PropTypes.object,
};

export default ToolBar