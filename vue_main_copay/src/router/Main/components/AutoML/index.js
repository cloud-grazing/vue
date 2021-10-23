import Training from './components/Training';

export default {
    path: '/autoML',
    name: 'AutoML',
    component: () => import('./Main'),
    children: [
        Training
    ]
};
