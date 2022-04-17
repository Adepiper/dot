import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ReportingService {
  constructor(private messageService: MessageService) {}

  public apiErrorService(error: HttpErrorResponse) {
    if (error.status === 0) {
      return this.messageService.add({
        severity: 'success',
        summary: 'Connection Error, Please try again',
      });
    }

    if (error.error.message) {
      return this.messageService.add({
        severity: 'error',
        summary: error.error.message,
      });
    }

    return this.messageService.add({
      severity: 'error',
      summary: `Something went wrong`,
    });
  }
}
