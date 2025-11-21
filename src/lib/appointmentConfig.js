// lib/appointmentConfig.js
export const getAvailableTimeSlots = async (date, bookedAppointments = []) => {
  const slots = [];

  const startDate = new Date(date);
  startDate.setHours(BUSINESS_HOURS.start, 0, 0, 0);

  const endDate = new Date(date);
  endDate.setHours(BUSINESS_HOURS.end, 0, 0, 0);

  const current = new Date(startDate);

  while (current < endDate) {
    const isBooked = bookedAppointments.some((appt) => {
      const apptTime = new Date(appt.date);
      return apptTime.getTime() === current.getTime();
    });

    if (!isBooked) {
      // Store the actual timestamp (number) instead of string
      slots.push(current.getTime());
    }

    current.setMinutes(current.getMinutes() + APPOINTMENT_DURATION);
  }

  return slots;
};
