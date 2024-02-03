import { Injectable } from '@angular/core';
import { Notes } from './notes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes: Notes[]  = [];
  constructor() { }
  submitNotes(id: Number,noteTitle: String, noteText: String){
    try{
      this.notes.push({id,noteTitle,noteText});
    console.log("Note submitted");
    }catch(error){
      console.log(error)
    }
  }
}
