import React, { useState, useEffect } from "react";
function TimeUsed() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    setTimeout(() => setSeconds(seconds + 1), 1000);
  });
  return (
    <div>
      <h2>You have used {seconds} seconds on this webside</h2>
    </div>
  );
}

export default TimeUsed;
