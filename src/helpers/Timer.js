import { useEffect, useState } from "react";

export default function Timer({ setStop, questionNumber }) {
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    if (timer === 0) return setStop(true);

    //load
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    //saat diload kita mau jalankan setInterval 1x saja
    return () => clearInterval(interval);
  }, [timer, setStop]);

  //reset timer kalau questionNumber berubah
  useEffect(() => {
    setTimer(5);
  }, [questionNumber]);

  return timer;
}
