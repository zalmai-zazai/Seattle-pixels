// import connectDB from "./db";
// import Appointment from "./model";

// export const addAppointment = async (formData) => {
//   "use server";
//   const { name, email, phone, message } = formData;

//   try {
//     connectDB();
//     const newAppointment = new Appointment({
//       name,
//       email,
//       phone,
//       message,
//     });
//     await newAppointment.save();
//     console.log(name);

//     console.log("Appointment Booked!");
//   } catch (error) {
//     console.log("Something went Wrong!");
//   }
// };

// export const sayHello = async () => {
//   console.log("Hello from backend");
// };
