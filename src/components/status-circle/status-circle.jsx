// eslint-disable-next-line react/prop-types
const StatusCircle = ({ taskDate }) => {
  const currentDate = new Date();

  const taskDateObj = new Date(taskDate * 1000);

  const oneDayInMs = 24 * 60 * 60 * 1000;
  const daysDiff = Math.floor((taskDateObj - currentDate) / oneDayInMs);

  let statusColor;
  if (isNaN(taskDateObj)) {
    // Если задача не назначена
    statusColor = 'red';
  } else if (daysDiff < 0) {
    // Если задача просрочена (ставим красный)
    statusColor = 'red';
  } else if (daysDiff === 0) {
    // Если задача сегодня (ставим зелёный)
    statusColor = 'green';
  } else if (daysDiff > 0) {
    // Если задача в будущем (ставим жёлтый)
    statusColor = 'yellow';
  }
  console.log(daysDiff)
  console.log(taskDateObj)

  return (
    <>
      <svg width="21" height="21" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10.5" cy="10.5" r="10.5" fill={statusColor}/>
      </svg>
    </>


  );
};

export default StatusCircle;
