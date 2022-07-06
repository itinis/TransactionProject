import { Component, createPlatform, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Application } from 'src/app/models/Application';
import { AplicationService } from 'src/app/services/aplication.service';

@Component({
  selector: 'app-aplication',
  templateUrl: './aplication.component.html',
  styleUrls: ['./aplication.component.css']
})
export class AplicationComponent implements OnInit {
  applicationList: any;
  headers: string[] = ['id', 'firstName', 'lastName'];
  form!: FormGroup;
  constructor(private aplicationService: AplicationService,
    private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.aplicationService.getApplications().subscribe((data: any) => {
      this.applicationList = data
    })

  }
  createForm() {

    this.form = this.fb.group({
      id: [""],
      firstName: [""],
      lastName: [""]
    })
  }
  getRecord(row: any) {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/aplicationDetails', { applicationRowData: JSON.stringify(row) }])
    );

    window.open(url, '_blank');
  }
}
