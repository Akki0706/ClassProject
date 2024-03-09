import { Injectable } from '@angular/core';
import { Member } from './member/member';
import { MEMBERS } from './mymember';
import { Observable,of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private messageService:MessageService) { }
  getMembers(): Observable<Member[]> {
    const members = of(MEMBERS);
    this.messageService.add('MessageService:fetched Members.....');
    return members;
  }
}