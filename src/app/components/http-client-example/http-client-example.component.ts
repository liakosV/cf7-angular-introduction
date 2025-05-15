import { Component, inject, OnInit } from '@angular/core';
import { JokesService } from 'src/app/shared/services/jokes.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-http-client-example',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css'
})
export class HttpClientExampleComponent implements OnInit {
  jokesService = inject(JokesService);

  dadJoke: string = '';
  chuckNorrisJoke: string = '';

  ngOnInit(): void {
    // this.jokesService.getDadJokes().subscribe((data) => {
    //   // console.log("DAD JOKE", data)
    //   console.log("Dad Joke>", data.joke)
    //   this.dadJoke = data.joke;
    // });

    // this.jokesService.getChuckNorrisJoke().subscribe((data) => {
    //   // console.log("CHUCK NORRIS JOKE", data)
    //   console.log("Chuck Joke>", data.value)
    //   this.chuckNorrisJoke =  data.value
    // })
    this.refreshDadJoke();
    this.refreshChuckNorrisJoke();
  }

  refreshDadJoke() {
    this.jokesService.getDadJokes()
      .subscribe((data) => {
        console.log("Dad Joke", data.joke)
        this.dadJoke = data.joke
      })
  }

  refreshChuckNorrisJoke() {
    this.jokesService.getChuckNorrisJoke()
      .subscribe((data) => {
        console.log("Chuck Joke", data.value)
        this.chuckNorrisJoke = data.value;
      })
  }
}
