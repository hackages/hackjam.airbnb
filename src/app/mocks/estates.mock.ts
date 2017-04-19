import { Estate } from '../types';

export const mock: Estate[] = [
  {
    title: 'Potrero Hill Garden Suite',
    pictureUrl: 'https://a2.muscache.com/ac/pictures/39994598/46b3f772' +
    '_original.jpg?interpolation=lanczos-none&size=large_cover&output-format=jpg&output-quality=70',
    roomType: 'entire_home',
    maxGuestAccepted: 3,
    pricePerNight: 90,
    userInfo: {
      'name': 'romain hoogmoed',
      'location': {
        'street': '1861 jan pieterszoon coenstraat',
        'city': 'maasdriel',
        'state': 'zeeland',
        'postCode': 69217
      },
      'email': 'romain.hoogmoed@example.com',
      'dateOfBirth': '1983-07-14',
      'registered': '2010-09-24 02:10:42',
      'phone': '(656)-976-4980',
      'id': 'BSN-04242023',
      'picture': {
        'large': 'https://randomuser.me/api/portraits/men/83.jpg',
        'medium': 'https://randomuser.me/api/portraits/med/men/83.jpg',
        'thumbnail': 'https://randomuser.me/api/portraits/thumb/men/83.jpg'
      },
      'nationality': 'NL'
    }
  },
  {
    title: 'Hill Garden Suite',
    pictureUrl: 'https://a0.muscache.com/ac/pictures/80811/7a57d0e7_original.jpg?interpolation=lanczos-none&size=large_cover&output-format=jpg&output-quality=70',
    roomType: 'entire_home',
    maxGuestAccepted: 2,
    pricePerNight: 70,
    userInfo: {
      'name': 'martine hoogmoed',
      'location': {
        'street': '1800 jan pieterszoon coenstraat',
        'city': 'maasdriel',
        'state': 'zeeland',
        'postCode': 69217
      },
      'email': 'martine.hoogmoed@example.com',
      'dateOfBirth': '1983-07-14',
      'registered': '2010-09-24 02:10:42',
      'phone': '(656)-976-4980',
      'id': 'BSN-04242023',
      'picture': {
        'large': 'https://randomuser.me/api/portraits/women/99.jpg',
        'medium': 'https://randomuser.me/api/portraits/med/women/99.jpg',
        'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/99.jpg'
      },
      'nationality': 'NL'
    }
  },
  {
    title: 'Mission Sunshine - Private Bath',
    roomType: 'private_room',
    maxGuestAccepted: 2,
    pricePerNight: 150,
    userInfo: {
      'name': 'Caroll kristensen',
      'location': {
        'street': '8816 østermarksvej',
        'city': 'lundby',
        'state': 'syddanmark',
        'postCode': 87170
      },
      'email': 'caroll.kristensen@example.com',
      'dateOfBirth': '1970-03-11 17:46:23',
      'registered': '2009-11-11 00:58:48',
      'phone': '83799387',
      'id': 'CPR 804343-2305',
      'picture': {
        'large': 'https://randomuser.me/api/portraits/women/56.jpg',
        'medium': 'https://randomuser.me/api/portraits/med/women/56.jpg',
        'thumbnail': 'https://randomuser.me/api/portraits/thumb/women/56.jpg'
      },
      'nationality': 'DK'
    }
  },
];
