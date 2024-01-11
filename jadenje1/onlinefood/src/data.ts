import { food } from "./app/s/model/food";
import { tag } from "./app/s/model/tag";

export const sample_foods:food[] =[
    {
        id:'1',
        name: 'Pizza Margherita',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['Italy'],
        stars: 4.5,
        imageUrl: 'assets/image1.jpg',
        tags: ['FastFood','Pizza','Lunch']
    },
    {
        id:'2',
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 15,
        favorite: false,
        origins: ['Italy'],
        stars: 4.3,
        imageUrl: 'assets/image2.jpg',
        tags: ['FastFood','Pizza','Lunch']
    },
    {
        id:'3',
        name: 'Pizza Capricciosa',
        cookTime: '10-20',
        price: 15,
        favorite: false,
        origins: ['Italy'],
        stars: 4.8,
        imageUrl: 'assets/image3.jpg',
        tags: ['FastFood','Pizza','Lunch']
    },
    {
        id:'4',
        name: 'Hamburger',
        cookTime: '10-25',
        price: 12,
        favorite: false,
        origins: ['USA'],
        stars: 4.5,
        imageUrl: 'assets/image4.jpg',
        tags: ['FastFood','Lunch' , 'Burger']
    },
    {
        id:'5',
        name: 'Cheeseburger',
        cookTime: '10-25',
        price: 14,
        favorite: false,
        origins: ['USA'],
        stars: 4.6,
        imageUrl: 'assets/image5.jpg',
        tags: ['FastFood','Lunch', 'Burger']
    },
    {
        id:'6',
        name: 'Hot Dog',
        cookTime: '10-12',
        price: 10,
        favorite: false,
        origins: ['USA'],
        stars: 4.1,
        imageUrl: 'assets/image6.jpg',
        tags: ['FastFood','Lunch']
    },
    {
        id:'7',
        name: 'Alfredo Pasta',
        cookTime: '15-25',
        price: 20,
        favorite: false,
        origins: ['Italy'],
        stars: 4.8,
        imageUrl: 'assets/image7.jpg',
        tags: ['FastFood','Pasta','Lunch']
    },
    {
        id:'8',
        name: 'Bolognese Pasta',
        cookTime: '15-25',
        price: 20,
        favorite: false,
        origins: ['Italy'],
        stars: 4.7,
        imageUrl: 'assets/image8.jpg',
        tags: ['FastFood','Pasta','Lunch']
    }
    ]

    export const sample_tags:tag[]=[
        {name: 'All' , count:8},
        {name: 'FastFood', count:8},
        {name: 'Pizza', count:3},
        {name: 'Pasta', count:2},
        {name: 'Lunch', count:8},
        {name: 'Burger', count:2}
    ]