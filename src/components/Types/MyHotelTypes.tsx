interface IRoomBooking {
  data: {
    id: number;
    booking_no: string;
    user_id: number;
    name: string;
    photo: string;
    email: string;
    check_in_time: string;
    check_out_time: string;
    number_of_nights: number;
    total_occupancy: number;
    extra_charge: string;
    grand_total: string;
    status: string;
    check_in_out_status: string;
    booking_rooms: {
      id: number;
      images: string[]; // Use string array instead of File[]
      room_id: number;
      bed_type: string;
      room_type: string;
      room_number: string;
      availability: number;
    }[];
  }[];
}
