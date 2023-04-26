export interface UserAddress {
    "street": String,
    "suite"?: String,
    "city": String,
    "zipcode": String,
    "geo": {
    "lat": String,
    "lng": String
    }
}

export interface UserCompany {
    "name": String,
    "catchPhrase": String,
    "bs": String
}

export default interface User {
    "id": Number,
    "name": String,
    "username": String,
    "email": String,
    "address": UserAddress,
    "phone": String,
    "website": String,
    "company": UserCompany
}
