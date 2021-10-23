import dataFlow from './components/DataFlow';
import edgeLists from './components/EdgeLists';

export default {
    path: '/kanban',
    name: 'Kanban',
    redirect: '/dataFlow',
    component: () => import('./Main'),
    children: [
        dataFlow,
        edgeLists
    ]
};
