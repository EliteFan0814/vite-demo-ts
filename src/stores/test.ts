interface Alert {
  time: string;
  color: string;
  alert?: (name:string,time:Number)=>string 
}

let myAlert: Alert = {
  time: '5s',
  color: 'red',
  alert() {
    console.log(this.time);
    return this.time
  },
};

export function xxx() {
  console.log(myAlert);
}
