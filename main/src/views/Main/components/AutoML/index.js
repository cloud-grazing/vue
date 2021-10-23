import TrainingRequest from './components/TrainingRequest';
import TrainingTasks from './components/TrainingTasks';

export default {
    path: '/autoML',
    name: 'AutoML',
    redirect: '/trainingRequest',
    component: () => import('./Main'),
    children: [
        TrainingRequest,
        TrainingTasks
    ]
};
