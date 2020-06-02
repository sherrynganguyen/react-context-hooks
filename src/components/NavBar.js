import React from 'react';
import { ThemeContext } from '../contexts/themeContext';

class NavBar extends React.Component {
  static contextType = ThemeContext
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Context App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      );
  }
}

export default NavBar;