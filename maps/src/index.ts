import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user: User = new User();
const company: Company = new Company();
const map = new CustomMap();

map.addMarker(user);
map.addMarker(company);
