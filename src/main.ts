// import './bases/01-const-let';
// import './bases/02-template-string';
// import './bases/03-object-literal';
// import './bases/04-arrays';
// import './bases/05-functions';
// import './bases/06-destructuring';
// import './bases/07-import-export';
// import './bases/08-classes';
// import './bases/09-inheritance';
// import './bases/10-generics';
// import './bases/11-async-await';
// import './bases/T01-const-let';
// import './bases/T02-template-string';
// import './bases/T03-object-literal';
// import './bases/T04-arrays';
// import './bases/T05-functions';
// import './bases/T06-obj-destructuring';
// import './bases/T07-import-export';
// import './bases/T08-imp-exp';
// import './bases/T09-promises';
// import './bases/T10-fetch-api';
// import './bases/T11-async-await';
// import './taller_bases/01-variables';
// import './taller_bases/02-template-strings';
// import './taller_bases/03-object-literal.ts';
// import './taller_bases/04-arrays.ts';
// import './taller_bases/05-functions.ts'
// import './taller_bases/06-destructuring.ts'
// import './taller_bases/07-array-destructuring.ts'
// import './taller_bases/08-imp-exp.ts'
// import './taller_bases/09-promises.ts'
// import './taller_bases/10-fetch-api.ts'
// import './taller_bases/11-async-await.ts'
import { renderDashboard } from './explorador_usuarios/dashboard';
renderDashboard();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = ` 
  <div>
    <h1>Hello mundo!</h1>
`;