export type user={
    username: String;
    password: String;
    confirmPassword: String;
    gender: String;
    age: number;
    email: String;
    phone: String;
    address: {
        street: String;
        city: String;
        state: String;
        zipCode: String;
    }
    "role":String;
}