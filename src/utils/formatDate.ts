export function formatDate(dateString = "1999-10-23T23:00:00.000Z") {
  if(dateString === '')return ''
  // Create a Date object from the UTC timestamp  
  const utcDate = new Date(dateString);

  // Create an Intl.DateTimeFormat object for the local time
  const localDateFormat = new Intl.DateTimeFormat("en-US", {
    timeZone: "Africa/Lagos", // Adjust this to 'Africa/Lagos' for Nigerian time
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Format the local date
  return localDateFormat.format(utcDate);
}
