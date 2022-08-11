import { ServerModel } from "../models/server.model";

export class ServerService{
    private servers:ServerModel[]=[
        {
            sid:1,
            name:'fury',
            imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXODEIwzkl4SXdVFbgU9UHniJIFt8FPz2IjA&usqp=CAU',
            rate:1200,
            fuelType:'Petrol',
            capacity:5

        },
        {
            sid:2,
            name:'Speedster',
            imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXODEIwzkl4SXdVFbgU9UHniJIFt8FPz2IjA&usqp=CAU',
            rate:5000,
            fuelType:'Petrol',
            capacity:4

        },
        {
            sid:3,
            name:'SeaBird',
            imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoNtrGmhVKGcha7C3trOYhhLwp7lp-rxqYiQ&usqp=CAU',
            rate:6000,
            fuelType:'Petrol',
            capacity:5

        },
        {
            sid:4,
            name:'fury',
            imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDrnsZSQGWXLbuZ_w2ZYfYOxJJoL0QanLQ-A&usqp=CAU',
            rate:1200,
            fuelType:'Petrol',
            capacity:5

        },
        {
            sid:5,
            name:'fury',
            imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg0TTEQiNifk3IR7o7SEs3LiNrtElnKbhWUw&usqp=CAU',
            rate:1200,
            fuelType:'Petrol',
            capacity:5

        },
        {
            sid:6,
            name:'fury',
            imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXODEIwzkl4SXdVFbgU9UHniJIFt8FPz2IjA&usqp=CAU',
            rate:1200,
            fuelType:'Petrol',
            capacity:5

        },
        {
            sid:7,
            name:'fury',
            imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZRCnI4hAut_dglErdHJN_Limn0RhgsUalRA&usqp=CAU',
            rate:1200,
            fuelType:'Petrol',
            capacity:5

        },
        {
            sid:8,
            name:'fury',
            imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg0TTEQiNifk3IR7o7SEs3LiNrtElnKbhWUw&usqp=CAU',
            rate:1200,
            fuelType:'Petrol',
            capacity:5

        },
    ];

    getBoats():ServerModel[]{
        return this.servers;
    }
}