import { Component,Input } from '@angular/core';
import { NgFor,NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Member } from '../member/member';


@Component({
  selector: 'app-memberdetails',
  standalone: true,
  imports: [NgFor,NgIf,FormsModule],
  templateUrl: './memberdetails.component.html',
  styleUrl: './memberdetails.component.css'
})
export class MemberdetailsComponent {
@Input() member?:Member;
}
