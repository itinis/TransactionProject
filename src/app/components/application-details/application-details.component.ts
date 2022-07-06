import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable } from 'rxjs';
import { AplicationService } from 'src/app/services/aplication.service';
import { forkJoin } from 'rxjs';
import { Card } from 'src/app/models/Card';
import { Transaction } from 'src/app/models/Transaction';
import { ApplicationDetailsData } from 'src/app/models/ApplicationDetailsData';
import { TransactionTypes } from 'src/app/models/TransactionType.enum';
import { Application } from 'src/app/models/Application';
@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css']
})
export class ApplicationDetailsComponent implements OnInit {
  application: Application = new Application();
  card: Card[] = [];
  transaction: Transaction[] = [];
  applicationDetailsList: ApplicationDetailsData[] = [];
  displayedColumns: string[] = ['cardNo', 'issuer', 'amount', 'transType'];

  constructor(private aplicationService: AplicationService, private activatedRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
    debugger
    const applicationObject = this.activatedRoute.snapshot.paramMap.get('applicationRowData');
    if (applicationObject) {
      this.application = JSON.parse(applicationObject);
      this.getDataApplicationDetials()
    }
  }

  getDataApplicationDetials() {
    if (this.application.id) {
      var observableCard: Observable<Card> = this.aplicationService.getCard(this.application.id.toString());
      var observableTransaction: Observable<Transaction> = this.aplicationService.getTransactions(this.application.id.toString());
      combineLatest([observableCard, observableTransaction])
        .subscribe(([card, tran]: [any, any]) => {
          this.card = card;
          this.transaction = tran
          this.getDatasource()

        },
          error => {

          });
    }

  }
  getDatasource() {
    this.transaction.forEach(elementData => {
      var element = new ApplicationDetailsData();
      element.amount = elementData.amount;
      var elementCard = this.card.find(x => x.id === elementData.cardId);
      element.cardNo = elementCard?.cardNo;
      element.issuer = elementCard?.issuer;
      const transactionTypes = Object.keys(TransactionTypes).filter((item) => {
        return isNaN(Number(item));
      });
      if (elementData.transType)
        element.transType = transactionTypes[elementData.transType - 1]
      this.applicationDetailsList.push(element);
      this.applicationDetailsList = [...this.applicationDetailsList];
    }
    );
  }
}



