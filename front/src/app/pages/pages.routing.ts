import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const PagesRoutes: Routes = [
    // {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    {
        path: 'pages',
        children: [
            {
                path: 'login',
                component: LoginComponent
            }
        ]
    },
];
