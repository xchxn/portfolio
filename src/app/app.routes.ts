import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { PostingsComponent } from './postings/postings.component';

export const routes: Routes = [
  { path: '', component: AboutComponent},
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent},
  { path: 'project', component: ProjectComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'postings', component: PostingsComponent },
  { path: '**', component: AboutComponent }
];
