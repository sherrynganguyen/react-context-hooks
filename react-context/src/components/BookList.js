import React, { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';

// class BookList extends React.Component {
//   render() {
//     return (
//       <ThemeContext.Consumer>{(context) => {
//         const { isLightTheme, light, dark } = context;
//         const theme = isLightTheme ? light : dark;
//         return (
//           <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
//             <ul>
//               <li style={{ background: theme.ui }}>the way of kings</li>
//               <li style={{ background: theme.ui }}>the name of the wind</li>
//               <li style={{ background: theme.ui }}>the final empire</li>
//             </ul>
//           </div>
//         )
//       }}
//       </ThemeContext.Consumer>
//     );
//   }
// }

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);

  const theme = isLightTheme ? light : dark;
  return (
    <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
      <ul>
        {books.map((book) => {
          return <li key={book.id} style={{ background: theme.ui }}>{book.title}</li>

        })}
      </ul>
    </div>
  );
}

export default BookList;