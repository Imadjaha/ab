import {  useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center items-center bottom-8 w-full mt-6 ralative">
        <p>Designed and developed by Aimad Bouchouaf</p>
        <p>{`© ${year}. All Rights Reserved.`}</p>
      </div>
    </>
  );
}