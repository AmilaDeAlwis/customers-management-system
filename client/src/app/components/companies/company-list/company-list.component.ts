import { Component } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent {
  public companies!: Company[];
  constructor (private companyService: CompanyService) {
    this.companyService.get().subscribe (
      data => {
        console.log('companies: ', data);
        this.companies = data;
      }
    )
  }
}
