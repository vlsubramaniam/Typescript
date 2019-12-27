import { User } from './models/User';
import { UserEdit } from './Views/UserEdit';

const user = User.buildUser({ name: 'Rajan', age: 34 });
const rootElement = document.getElementById('root');

if (rootElement) {
  const userEdit = new UserEdit(rootElement, user);
  console.log(userEdit);
  userEdit.render();
} else {
  throw new Error('Root element not found');
}
