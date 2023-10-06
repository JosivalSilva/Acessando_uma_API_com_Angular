import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon:PokemonData | any

  constructor(
    private service:PokemonService
  ) {
    this.pokemon = {
      id: 0,
      name: "",
      sprites:{
        front_default: ""
      },
      types:[]
    }
   }

  ngOnInit(): void {
    this.getPokemon('pikachu')
  }

  getPokemon(searchName:string){
    this.service.getPokemon(searchName).subscribe(
      {
        next: (result) => {
          this.pokemon = {
            id: result.id,
            name: result.name,
            sprites: result.sprites,
            types: result.types
          }

        },
        error: (err) => console.log(err)
      }
    )

    console.log(searchName)
  }

}
