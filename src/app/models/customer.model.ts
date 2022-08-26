

export interface CustomerModel{
    
    id: number;
    name: string;
    emailId: string;
    phoneNumber: string;
    username: string;
    password: string;
    bookings: BookingRequestModel[];
}

interface BookingRequestModel{
    id : number;
    bookingDate: any;
    bookedFromDate:any;
    bookedToDate:any;
    boatId:number;
}