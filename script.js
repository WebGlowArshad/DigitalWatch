// let currentTime = () => {
//   let liveTime = new Date().toLocaleTimeString();
//   document.getElementById("clock").innerText = liveTime;
// };

// currentTime();
// setInterval(() => {
//     currentTime()
// },1000)


// let currentTime = () => {
//     let liveTime = new Date().toLocaleTimeString()
//     document.getElementById('clock').innerText = liveTime;
// }

// currentTime()

// setInterval(() => {
//     currentTime()
// },1000)





const currentTime = () =>{
    let liveTime = new Date ().toLocaleTimeString()
    document.getElementById('clock').innerHTML = liveTime

}
currentTime ()
setInterval(() => {
    currentTime()
},1000)

// const liveTime = () =>{
//     let samay = new Date ().toLocaleTimeString()
//     document.getElementById('date').innerText = samay
// }
// liveTime()

// setInterval(() => {
//     liveTime()
// }, 2000);

const liveDate = () => {
    let date = new Date().toLocaleDateString()
    document.getElementById('date').innerText = date
}
liveDate ()