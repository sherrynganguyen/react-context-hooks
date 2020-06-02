import React from 'react';

import { ThemeContext } from '../contexts/themeContext';

class ThemeToggle extends React.Component {
  static contextType = ThemeContext;
  
  render() {
    const { toggleTheme } = this.context;
    return (
      <button onClick={toggleTheme}>Toggle the Theme</button>
    )
  }
}

export default ThemeToggle;