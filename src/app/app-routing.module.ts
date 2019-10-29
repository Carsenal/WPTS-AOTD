import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullListComponent }  from './full-list/full-list.component';
import { ShortListComponent } from './short-list/short-list.component';
import { QuizComponent }      from './quiz/quiz.component';
import { RecommendComponent } from './recommend/recommend.component';

const routes: Routes = [
  { path: 'fullList',   component: FullListComponent },
  { path: 'shortList',  component: ShortListComponent },
  { path: 'quiz',       component: QuizComponent },
  { path: 'recommend',  component: RecommendComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
