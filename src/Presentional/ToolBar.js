import React from 'react'
import { createStyleSheet } from 'jss-theme-reactor';
import classNames from 'classnames';

export const styleSheet = createStyleSheet('Toolbar', (theme) => ({
  root: {
    alignItems: 'center',
    backgroundColor: theme.primaryColor,
    display: 'flex',
    height: 40,
    left: 0,
    position: 'fixed',
    top: 0,
    width: '100%',
  },
  menuItem: {
    fontSize: '1.5em',
    '&:after': {
      content: 'attr(data-label)',
      fontSize: '0.75em',
    }
  }
}));

const ToolBar = (props, context) => {
    const classes = context.styleManager.render(styleSheet);
    return(
        <div className={classes.root}>
          <i className={classNames("ion-edit", classes.menuItem)} data-label="nuovo messaggio"/>
        </div>
    )
}

ToolBar.contextTypes = {
  styleManager: React.PropTypes.object,
};

export default ToolBar