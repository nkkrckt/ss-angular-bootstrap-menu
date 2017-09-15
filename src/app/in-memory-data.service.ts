import {InMemoryDbService} from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const dishes = [
      {
        id: 1,
        name: 'Pizza Margarita',
        imgURL: 'assets/images/margarita.jpg',
        price: 4,
        calendar1: '22.09.2017',
        calendar2: '22.10.2017'
      },
      {
        id: 2,
        name: 'Lasagna',
        imgURL: 'assets/images/lasagna.jpg',
        price: 20,
        calendar1: '07.04.2017',
        calendar2: '22.19.2017'
      },
      {
        id: 3,
        name: 'Pasta Carbonara',
        imgURL: 'assets/images/carbonara.jpg',
        price: 5,
        calendar1: '22.09.2017',
        calendar2: '22.11.2017'
      }
    ];
    return {dishes};
  }
}
