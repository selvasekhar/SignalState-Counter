import { Component } from '@angular/core';
import { patchState, signalState } from '@ngrx/signals';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  readonly state = signalState({count:0})

  onIncrement(){
    patchState(this.state, (state)=> ({count:state.count +1}))
  }

  onDecrement(){
    patchState(this.state, (state)=> ({count:state.count -1}))
  }
  onReset(){
    patchState(this.state, {count: 0})
  }
}
