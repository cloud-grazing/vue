import AvailableIAToDeploy from './components/AvailableIAToDeploy';
import DeployedIALists from './components/DeployedIALists';

export default {
    path: '/edgeia',
    name: 'EdgeIA',
    redirect: '/availableIAToDeploy',
    component: () => import('./Main'),
    children: [
        AvailableIAToDeploy,
        DeployedIALists
    ]
};
