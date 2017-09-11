import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CurrentPropertiesComponent } from './current-properties/current-properties.component';
import { UserLoginComponent } from './user-login/user-login.component';

const appRoutes: Routes = [
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },
    {
      path: 'current-properties',
      component: CurrentPropertiesComponent
    },
    {
      path: 'blog',
      component: BlogComponent,
    },
    {
      path: 'blog/:id',
      component: BlogComponent
    },
    {
      path: 'login',
      component: UserLoginComponent
    },
    {
      path: '',
      component: HomePageComponent,
      pathMatch: 'full'
    },
    {
      path: '**',
      component: PageNotFoundComponent
    }
  ];


@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
