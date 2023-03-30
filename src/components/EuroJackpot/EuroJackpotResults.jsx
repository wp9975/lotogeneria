import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";

const EuroJackpotResults = ({ generatedSets }) => {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    if (!generatedSets || generatedSets.length === 0) {
      setNumbers([]);
    } else {
      setNumbers(generatedSets);
    }
  }, [generatedSets]);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 ">
      {numbers.map((numbers, index) => (
        <Card key={index}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Zestaw {index + 1}:
            </Typography>
            <Typography variant="body1" component="p">
              Główne liczby: {Array.from(numbers.mainNumbers).join(", ")}
            </Typography>
            <Typography variant="body1" component="p">
              Liczby Euro: {Array.from(numbers.euroNumbers).join(", ")}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default EuroJackpotResults;
