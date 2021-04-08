import { TechskillsComponent } from './components/techskills/techskills.component';
import { PersonalprojectsComponent } from './components/personalprojects/personalprojects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'personalProjects', component: PersonalprojectsComponent },
  { path: 'techSkills', component: TechskillsComponent },
  { path: '**', component: AboutComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
