import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-epdf',
  templateUrl: './epdf.component.html',
  styleUrls: ['./epdf.component.css']
})
export class EpdfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  download() {

    let doc = new jsPDF();

doc.text('Hello world!', 10, 10)
doc.save('a4.pdf')
  }
}
