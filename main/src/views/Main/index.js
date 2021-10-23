import Kanban from './components/Kanban';
import EdgeIA from './components/EdgeIA';
import AutoML from './components/AutoML';

export default {
    path: '/',
    name: 'Main',
    redirect: '/kanban',
    component: () => import('./Main'),
    children: [
        Kanban,
        EdgeIA,
        AutoML
    ]
};
