import React from 'react';
import { ThemeContext } from '../contexts/themeContext';

class BookList extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>{(context) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;
        return (
          <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
            <ul>
              <li style={{ background: theme.ui }}>the way of kings</li>
              <li style={{ background: theme.ui }}>the name of the wind</li>
              <li style={{ background: theme.ui }}>the final empire</li>
            </ul>
          </div>
        )
      }}
      </ThemeContext.Consumer>
    );
  }
}


export default BookList;