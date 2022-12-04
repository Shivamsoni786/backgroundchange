const getUSA = async () => {
  try {
    const res = await fetch(
      `http://worldtimeapi.org/api/timezone/America/Toronto`,
      {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getAustralia = async () => {
  try {
    const res = await fetch(
      `http://worldtimeapi.org/api/timezone/Australia/Melbourne`,
      {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getUK = async () => {
  try {
    const res = await fetch(
      `http://worldtimeapi.org/api/timezone/Europe/London`,
      {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
const getSouthAfrica = async () => {
  try {
    const res = await fetch(
      `http://worldtimeapi.org/api/timezone/Africa/Tripoli`,
      {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export {getUSA, getAustralia, getUK, getSouthAfrica};
