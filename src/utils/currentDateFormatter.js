export const currentDateFormatter = () => {
  // 2桁0埋め処理
  const paddingZero = (num) => {
    return ("00" + num).slice(-2);
  };

  const currentTime = new Date();
  const year = currentTime.getFullYear();
  const month = paddingZero(currentTime.getMonth() + 1);
  const date = paddingZero(currentTime.getDate());
  const hour = paddingZero(currentTime.getHours());
  const minute = paddingZero(currentTime.getMinutes());
  const second = paddingZero(currentTime.getSeconds());

  return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
};
