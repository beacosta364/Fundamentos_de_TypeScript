import { getUsers, getUserById } from './api';
import { printUser } from './utils';
import './dashboard.css';

export async function renderDashboard(): Promise<void> {

const users = await getUsers();

const app = document.querySelector<HTMLDivElement>('#app');
if (!app) return;
app.innerHTML = `
<div class="dashboard">
<h1>Dashboard de Usuarios</h1>
<p>
Total usuarios: ${users.length}
</p>
<div class="search-container">
<input
id="userId"
type="number"
placeholder="Ingrese un ID"
/>
<button id="btnSearch">
Buscar
</button>
</div>
<div id="searchResult"></div>
<div class="users">
${users.map(printUser).join('')}
</div>
</div>
`;

const button =
document.querySelector<HTMLButtonElement>(
'#btnSearch'
);
const input =
document.querySelector<HTMLInputElement>(
'#userId'
);
const result =
document.querySelector<HTMLDivElement>(
'#searchResult'
);
button?.addEventListener('click', async () => {
const id = Number(input?.value);
if (!id) {
if (result) {
result.innerHTML =
'<p>Ingrese un ID válido</p>';
}
return;
}
const user = await getUserById(id);
if (!user) {
if (result) {
result.innerHTML =`
<div class="user-error">
Usuario con ID ${id} no encontrado.
</div>
`;
}
return;
}
if (result) {
result.innerHTML = printUser(user);
}
});
}

