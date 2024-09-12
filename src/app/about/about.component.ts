import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  type: string;
  name: string;
  date: number;
  organization: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {type: '자격증', name: '정보처리기사', date: 240628, organization: '한국산업인력공단'},
  {type: '자격증', name: 'SQLD', date: 231207, organization: '한국데이터산업진흥원'},
  {type: '수상', name: '캡스톤경진대회', date: 240621, organization: '전북대학교 SW중심대학사업단'},
  {type: '수상', name: '창업아이디어경진대회', date: 231221, organization: '전북대학교 SW중심대학사업단'},
];

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, 
    MatCardModule, MatButtonModule, MatTableModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  displayedColumns: string[] = ['type', 'name', 'date', 'organization'];
  dataSource = ELEMENT_DATA;
}
