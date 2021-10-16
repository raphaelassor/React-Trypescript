// TELL TS TYPES OF ARGUMENTS AND RETURN VALUES

// INFERENCE HAPPENS ONLY ON RETURN

const add = (a: number, b: number): number => {
  return a + b;
};

function addNumToStr(a: number, b: string): string {
  return a + b;
}

const throwError = (msg: string): never => {
  throw new Error(msg);
};

const getMsg = (msg: string): string => {
  if (!msg) throw Error;
  return msg;
};

const forecast = {
  date: new Date(),
  weather: 'sunny',
  temp: 25,
};

const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date, weather)
}