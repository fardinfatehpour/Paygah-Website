// import React from "react";
// import {
//   PrayerTimes,
//   CalculationMethod,
//   Coordinates,
//   DateComponents,
// } from "adhan";

// function Prayer() {
//   const coordinates = new Coordinates(37.196, 50.153);

//   // روش محاسبه را انتخاب کنید
//   const params = CalculationMethod.MuslimWorldLeague();
//   params.madhab = "Shafi";

//   // تاریخ امروز را دریافت کنید
//   const date = DateComponents.from(new Date());

//   // محاسبه اوقات نماز
//   const prayerTimes = new PrayerTimes(coordinates, date, params);
//   return (<>
//     <input type="button"onClick={()=>{
//         console.log("Fajr: " + prayerTimes.fajr);
//         console.log("Dhuhr: " + prayerTimes.dhuhr);
//         console.log("Asr: " + prayerTimes.asr);
//         console.log("Maghrib: " + prayerTimes.maghrib);
//         console.log("Isha: " + prayerTimes.isha);
//     }}
//     </>
//     )
// }

// export default Prayer;
