import dataFlow from './components/DataFlow';
import edgeLists from './components/EdgeLists';

export default {
    path: '/kanban',
    name: 'Kanban',
    redirect: '/edgeLists',
    component: () => import('./Main'),
    children: [
        edgeLists,
        dataFlow
    ]
};
