import { SkillComponent } from './components/skill/skill.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AboutComponent } from './components/about/about.component';
import { TechskillsComponent } from './components/techskills/techskills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { PersonalprojectsComponent } from './components/personalprojects/personalprojects.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ListComponent } from './components/list/list.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AboutComponent,
    TechskillsComponent,
    ExperienceComponent,
    PersonalprojectsComponent,
    TimelineComponent,
    ListComponent,
    SkillComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
