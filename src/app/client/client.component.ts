import { Component, OnInit } from '@angular/core';
import {Client} from '../shared/client';
import {ClientService} from '../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  clients: Client[];
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getClient().subscribe(clients => {
      this.clients = clients;
      console.log(clients);
    });
  }

}
