//const newpromise = new Promise((resolve, rejact) => {
//rejact(india);
//});
//const cc = new Promise((resolve, rejact) => {});
//const v = new Promise((resolve, rejact) => {
  //setTimeout(() => {
    //resolve("jikl");
  //}, 4000);
//});
//new Promise();
//then.(Response)=> {
  //  console.log(Response)
//};
async function prom1(num = 0) {
    return new Promise((resolve, rejact) =>){
        setTimeout(() => {
            if (num % 2 == 0) {
                resolve("Even Number!!");
            } else {
                rejact("Odd Number!!!");
            }
        },5000)
    }
}