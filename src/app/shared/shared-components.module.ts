import { NgModule } from '@angular/core';

import { EnumArrayPipe, SplitDaysPipe } from './pipes';
import { ViewSelectionComponent } from './components/view-selection/view-selection.component';
import { CommonModule } from '@angular/common';

@NgModule({
  exports: [EnumArrayPipe, SplitDaysPipe, ViewSelectionComponent],
  declarations: [EnumArrayPipe, SplitDaysPipe, ViewSelectionComponent],
  imports: [CommonModule],
  providers: [],
})
export class SharedModule {}
