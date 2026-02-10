//for the fun easter egg on the footer
const dailyMessage = [
    "Isa. 12:1",
    "Jer. 29:11",
    "Rom. 8:6",
    "Rom. 10:9",
    "Jhn. 3:16",
    "Mat. 7:5",
    "Mar. 9:39",
    "1 Cor. 13:13",
    "Nah. 1:7",
    "Ecc. 8:14-15",  
    "Ecc. 2:1",
    "Ecc. 1:18",
    "Rev. 6:8",
    "Psa. 139:14",
    "Psa. 139:23",
    "Psa. 68:6",
    "You are Loved ✞"
];

const today = new Date(); 

const dayOfWeek = today.getDay();

const messageforToday = dailyMessage[dayOfWeek]; //sets new message for a new day

document.getElementById("daily-message").textContent = messageforToday; //puts it in the footer element in footer

