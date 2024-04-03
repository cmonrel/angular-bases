import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    id: 'dasf',
    name: 'Trunk',
    power: 10
  }];

  @Output()
  public onDeleteId:  EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string):void {
    // debugger;
    if (this.characterList.length === 0) return;

    this.onDeleteId.emit(id);
  }
}
