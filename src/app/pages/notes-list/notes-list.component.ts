import { Component, OnInit } from '@angular/core';
import {NotesService} from '../../shared/notes.service';
import {Note} from '../../shared/note.model';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  notes: Note[] = new Array<Note>();

  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
    this.notes = this.noteService.getAll()
  }

  deleteNode(id: number) {
    this.noteService.delete(id);
  }
}
