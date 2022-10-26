import { faker } from '@faker-js/faker';

class Contact {
  constructor() {
    this.id = faker.datatype.uuid();
    this.phone = faker.phone.number();
    this.avatar = faker.image.avatar();
    this.fullName = faker.name.fullName();
    this.address = `${faker.address.streetAddress()}, ${faker.address.cityName()} ${faker.address.countryCode()}`;
  }
}

export const getNewContacts = (numberOfContacts) => Array.from({length: numberOfContacts}, () => new Contact());
