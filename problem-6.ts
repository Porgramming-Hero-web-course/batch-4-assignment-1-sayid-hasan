// Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

// // Sample Input :
// const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(updateProfile(myProfile, { age: 26 }));

// // Sample Output:
// {
//   name: "Alice",
//   age: 26,
//   email: "alice@example.com"
// }

//problem 6
interface Profile {
  name: string;
  age: number;
  email: string;
}

type UpdateProfile = {
  [key in keyof Profile]: Profile[key];
};
type UpdateProfilePartial = Partial<UpdateProfile>;
const myProfile = {
  name: "Alice",
  age: 26,
  email: "alice@example.com",
};

const updateProfile = (
  profile: Profile,
  updateProfile: UpdateProfilePartial
): Profile => {
  const updatedprofile = {
    ...profile,
    ...updateProfile,
  };
  return updatedprofile;
};

console.log(updateProfile(myProfile, { email: "syedhasanMohammad@gmail.com" }));
