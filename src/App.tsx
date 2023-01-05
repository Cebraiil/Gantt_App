// This Project made by Ayman jibrael on 01/05/2023 for Umut Erden.
// Gantt chart using Syncfusion component.
// github account : https://github.com/aymanjibrael

import React from 'react';
import './App.css';
import MenuBar from './components/MenuBar';

function App() {
  const menuItems = [
      {
          items: [
              { text: 'Open' },
              { text: 'Save' },
              { text: 'Exit' }
          ],
          text: 'File'
      },
      {
          items: [
              { text: 'Cut' },
              { text: 'Copy' },
              { text: 'Paste' }
          ],
          text: 'Edit'
      },
      {
          items: [
              { text: 'Toolbar' },
              { text: 'Sidebar' }
          ],
          text: 'View'
      },
      {
          items: [
              { text: 'Spelling & Grammar' },
              { text: 'Customize' },
              { text: 'Options' }
          ],
          text: 'Tools'
      },
      { text: 'Go' },
      { text: 'Help' }
  ];

  return (
    <div className="App">
      <MenuBar />
    </div>
  );
}

export default App;
