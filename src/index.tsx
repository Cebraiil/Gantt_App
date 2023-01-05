import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { registerLicense } from '@syncfusion/ej2-base';
// license key belongs to Ayman Jibrael
registerLicense('ORg4AjUWIQA/Gnt2VVhkQlFadVdJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxQdkRjXH9edHZWRGdVV0c=');


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

