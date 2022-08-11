export interface BoatsModel{
    id:number;
    bookings:BookingsModel[],
    boatName:string;
    imageUrl:string;
    fuelType:string;
    maxPassengers:number;
    ratePerDay:number;
}

interface BookingsModel{
    id:number;
    bookingDate: string;
    bookedFromDate:string;
    bookedTodate:string;
    boatId:number;
}