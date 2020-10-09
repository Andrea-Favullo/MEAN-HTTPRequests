import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foo } from './foo.model';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent {
  data: Object;
  fooData: Object;
  loading: boolean;
  o: Observable<Object>;
  oFoo: Observable<Foo[]>;
  constructor(public http: HttpClient) { }
  makeRequest(): void {
    this.loading = true;
    this.o = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
    this.o.subscribe(this.getData);
    console.log(this.data);
  }
  getData = (d: Object) => {
    this.data = new Object(d);
    this.loading = false;
  }
  //Nota bene, questo è un metodo alternativo e compatto per fare la stessa cosa di
  //makeRequest senza dichiarare la variabile Observable e creando l’arrow function
  //direttamente dentro il metodo subscribe
  makeCompactRequest(): void {
    this.loading = true;
    this.http
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      });
  }

  makeTypedRequest(): void {

    this.loading = true;
    this.oFoo = this.http.get<Foo[]>('https://jsonplaceholder.typicode.com/posts');
    this.oFoo.subscribe(data => {
      this.fooData = data;
      this.loading = false;
    });
    console.log(this.fooData);
  }
}
