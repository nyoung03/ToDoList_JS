const dateTitle = document.querySelector("#date-title");
const clockTitle = document.querySelector("#clock-title");

function getDate() {
  const getdate = new Date();
  const month = String(getdate.getMonth() + 1).padStart(2, "0");
  const date = String(getdate.getDate()).padStart(2, "0");
  const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];
  const day = WEEKDAY[getdate.getDay()];
  const hour = String(getdate.getHours()).padStart(2, "0");
  const min = String(getdate.getMinutes()).padStart(2, "0");
  const sec = String(getdate.getSeconds()).padStart(2, "0");
  dateTitle.innerText = `${month}월 ${date}일 ${day}요일`;
  clockTitle.innerText = `${hour}시 ${min}분 ${sec}초`;
}

getDate();
setInterval(getDate, 1000);
