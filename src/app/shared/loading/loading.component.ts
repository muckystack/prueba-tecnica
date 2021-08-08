import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent implements OnInit {
  loading: boolean = false;

  constructor(private _loadingService: LoadingService) {}

  ngOnInit(): void {
    this._loadingService.loading.subscribe(
      (data: boolean) => (this.loading = data)
    );
  }
}
