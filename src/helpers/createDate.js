const createDate = (timestamp) => {
  const days = [
    "Mon",
    "Tues",
    "Wed",
    "Thurs",
    "Fri",
    "Sat",
    "Sun"
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const datestamp = new Date(timestamp);
  const day = days[datestamp.getDay()];
  const date = datestamp.getDate();
  const month = months[datestamp.getMonth()];

  return `${day} ${date} ${month}`;
};

export default createDate;