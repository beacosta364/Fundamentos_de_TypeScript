import type { User } from './types';

export function printUser(user: User): string {

const {
id,
name,
username,
email,
address: { city }
} = user;

return `
<div class="user-card">
<h3>${name}</h3>
<p>ID: ${id}</p>
<p>Username: ${username}</p>
<p>Email: ${email}</p>
<p>Ciudad: ${city}</p>
</div>
`;
}