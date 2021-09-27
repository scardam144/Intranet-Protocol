import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentComponent } from './document/document.component';
import { MainContentComponent } from './main-content/main-content.component';
import { PeopleComponent } from './people/people.component';
import { SocialComponent } from './social/social.component';
import { StoriesComponent } from './stories/stories.component';
const routes: Routes = [
  { path:"document",component: DocumentComponent},
  { path:"home",component: MainContentComponent},
  { path:"people",component: PeopleComponent },
  { path:"stories",component: StoriesComponent},
  { path:"social",component: SocialComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
