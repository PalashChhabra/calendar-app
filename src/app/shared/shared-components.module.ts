import { NgModule } from '@angular/core';

import { EnumArrayPipe, SplitDaysPipe } from './pipes';
import { ViewSelectionComponent } from './components/view-selection/view-selection.component';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  exports: [EnumArrayPipe, SplitDaysPipe, ViewSelectionComponent],
  declarations: [
    EnumArrayPipe,
    SplitDaysPipe,
    ViewSelectionComponent,
    ErrorPageComponent,
  ],
  imports: [CommonModule, RouterModule],
  providers: [],
})
export class SharedModule {}
