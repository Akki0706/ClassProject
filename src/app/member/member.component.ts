import { Component } from '@angular/core';
import { Member } from './member';
import { FormsModule } from '@angular/forms';
import { MEMBERS } from '../mymember';
import { NgFor,NgIf } from '@angular/common';
import { MemberdetailsComponent } from '../memberdetails/memberdetails.component';
import { MemberService } from '../member.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf,MemberdetailsComponent],
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent {
  members: Member[] = [];

  constructor(private memberService: MemberService,private messageService:MessageService){}

  ngOnInit(): void{
    this.getMembers();
  }

  getMembers(): void{
    this.memberService.getMembers().subscribe(members => this.members = members);
  }

  selectedMember?: Member;
  onSelect(member: Member): void {
    this.selectedMember = member;
    this.messageService.add(`MemberComponent:Selected Member id=${member.id}`);
  }
}