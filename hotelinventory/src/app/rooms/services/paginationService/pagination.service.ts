import { Injectable } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  constructor() {}

  private currentPage!: number;
  private pageSize!: number;
  private totalPages!: number;
  private totalRecords!: number;

  setPaginationSize(
    icurrentPage: number,
    ipageSize: number,
    itotalPages: number,
    itotalRecords: number
  ) {
    this.currentPage = icurrentPage;
    this.pageSize = ipageSize;
    this.totalPages = itotalPages;
    this.totalRecords = itotalRecords;
  }

  get pages(): number[] {
    const pages: number[] = [];

    for (let i = this.currentPage - 2; i <= this.currentPage + 2; i++) {
      if (i > 0 && i <= this.totalPages) {
        pages.push(i);
      }
    }

    return pages;
  }
}
