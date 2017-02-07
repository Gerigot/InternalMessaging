import React from 'react';
import { create as createJss } from 'jss';
import preset from 'jss-preset-default';
import { createStyleManager } from 'jss-theme-reactor';

const themeObj = {
  primaryColor: '#6B9FC6',
  fontFamily: 'Roboto',
  fontSize: 12,
  color: 'red',
};

const styleManager = createStyleManager({
  jss: createJss(preset()),
  theme: themeObj,
});

class Styled extends React.Component {
  getChildContext() {
    return {styleManager: styleManager};
  }
  render(){
      return this.props.children;
  }
}
Styled.childContextTypes = {
  styleManager: React.PropTypes.object,
};

export default Styled; 