export class Estate {
  title: string;
  pictureUrl?: string;
  userInfo: User;
  roomType: RoomType;
  maxGuestAccepted: number;
  pricePerNight: number;
}

export type RoomType = 'entire_home' | 'private_room' | 'shared_room';

export class User {
  name: string;
  location: Location;
  email: string;
  dateOfBirth: string;
  registered: string;
  phone: string;
  id: string;
  picture: Picture;
  nationality: string;
}

export class Location {
  street: string;
  city: string;
  state: string;
  postCode: number; // format: YYYY-MM-DD to DD-MM-YYYY
}

export class Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
