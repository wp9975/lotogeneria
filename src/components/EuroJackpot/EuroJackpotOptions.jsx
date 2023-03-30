import React, { Fragment, useState } from "react";
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
  Slider,
} from "@mui/material";
import styled from "@emotion/styled";
import InteractiveNumberBoard from "../global/InteractiveNumberBoard";

const StyledFormControlLabel = styled(FormControlLabel)({
  marginLeft: "16px",
});

const EuroJackpotOptions = ({ onGenerateNumbers }) => {
  const [numSets, setNumSets] = useState(1);
  const [uniqueNumbers, setUniqueNumbers] = useState(false);
  const [mainNumberRange, setMainNumberRange] = useState([1, 50]);
  const [euroNumberRange, setEuroNumberRange] = useState([1, 12]);
  const [requiredMainNumbers, setRequiredMainNumbers] = useState([]);
  const [requiredEuroNumbers, setRequiredEuroNumbers] = useState([]);
  const [excludedMainNumbers, setExcludedMainNumbers] = useState([]);
  const [excludedEuroNumbers, setExcludedEuroNumbers] = useState([]);

  const generateNumbers = () => {
    const result = [];

    for (let i = 0; i < numSets; i++) {
      let mainNumbers = new Set();
      let euroNumbers = new Set();

      while (mainNumbers.size < 5 - requiredMainNumbers.length) {
        const randomNumber =
          Math.floor(
            Math.random() * (mainNumberRange[1] - mainNumberRange[0] + 1)
          ) + mainNumberRange[0];

        if (
          (!uniqueNumbers ||
            !result.some((set) => set.mainNumbers.has(randomNumber))) &&
          !requiredMainNumbers.includes(randomNumber) &&
          !excludedMainNumbers.includes(randomNumber)
        ) {
          mainNumbers.add(randomNumber);
        }
      }

      while (euroNumbers.size < 2 - requiredEuroNumbers.length) {
        const randomNumber =
          Math.floor(
            Math.random() * (euroNumberRange[1] - euroNumberRange[0] + 1)
          ) + euroNumberRange[0];

        if (
          (!uniqueNumbers ||
            !result.some((set) => set.euroNumbers.has(randomNumber))) &&
          !requiredEuroNumbers.includes(randomNumber) &&
          !excludedEuroNumbers.includes(randomNumber)
        ) {
          euroNumbers.add(randomNumber);
        }
      }

      const sortedMainNumbers = new Set(
        [...mainNumbers, ...requiredMainNumbers].sort((a, b) => a - b)
      );
      const sortedEuroNumbers = new Set(
        [...euroNumbers, ...requiredEuroNumbers].sort((a, b) => a - b)
      );

      result.push({
        mainNumbers: sortedMainNumbers,
        euroNumbers: sortedEuroNumbers,
      });
    }

    onGenerateNumbers(result);
  };

  const handleNumberValidation = (input) => {
    const numbers = input.split(",").map((n) => parseInt(n.trim()));
    const validMainNumbers = numbers.filter(
      (n) => !isNaN(n) && n >= 1 && n <= 50
    );
    const validEuroNumbers = numbers.filter(
      (n) => !isNaN(n) && n >= 1 && n <= 12
    );
    return { validMainNumbers, validEuroNumbers };
  };

  return (
    <Fragment>
      <div className="mx-2 my-10 lotto-options">
        <div className="mb-4 form-group">
          <TextField
            label="Ilość zestawów liczb:"
            type="number"
            value={numSets}
            onChange={(e) => setNumSets(parseInt(e.target.value))}
            variant="outlined"
            fullWidth
          />
          <StyledFormControlLabel
            control={
              <Checkbox
                checked={uniqueNumbers}
                onChange={(e) => setUniqueNumbers(e.target.checked)}
                color="primary"
              />
            }
            label="Unikalne liczby w każdym zestawie"
          />
        </div>
        <div className="mb-4 form-group">
          <Typography id="main-range-slider" gutterBottom>
            Zakres głównych liczb do losowania:
          </Typography>
          <Slider
            value={mainNumberRange}
            onChange={(e, newValue) => setMainNumberRange(newValue)}
            valueLabelDisplay="auto"
            min={1}
            max={50}
            aria-labelledby="main-range-slider"
          />
        </div>
        <div className="mb-4 form-group">
          <Typography id="euro-range-slider" gutterBottom>
            Zakres liczb Euro do losowania:
          </Typography>
          <Slider
            value={euroNumberRange}
            onChange={(e, newValue) => setEuroNumberRange(newValue)}
            valueLabelDisplay="auto"
            min={1}
            max={12}
            aria-labelledby="euro-range-slider"
          />
        </div>
        <div className="mb-4 form-group">
          <TextField
            label="Główne liczby pewne do wylosowania:"
            type="text"
            value={requiredMainNumbers.join(", ")}
            onChange={(e) => {
              const { validMainNumbers } = handleNumberValidation(
                e.target.value
              );
              setRequiredMainNumbers(validMainNumbers);
            }}
            variant="outlined"
            fullWidth
            placeholder="1, 2, 3, 4, 5"
          />
        </div>
        <div className="mb-4 form-group">
          <TextField
            label="Liczby Euro pewne do wylosowania:"
            type="text"
            value={requiredEuroNumbers.join(", ")}
            onChange={(e) => {
              const { validEuroNumbers } = handleNumberValidation(
                e.target.value
              );
              setRequiredEuroNumbers(validEuroNumbers);
            }}
            variant="outlined"
            fullWidth
            placeholder="1, 2"
          />
        </div>
        <div className="mb-4 form-group">
          <TextField
            label="Główne liczby do pominięcia:"
            type="text"
            value={excludedMainNumbers.join(", ")}
            onChange={(e) => {
              const { validMainNumbers } = handleNumberValidation(
                e.target.value
              );
              setExcludedMainNumbers(validMainNumbers);
            }}
            variant="outlined"
            fullWidth
            placeholder="6, 7, 8, 9, 10"
          />
        </div>
        <div className="mb-4 form-group">
          <TextField
            label="Liczby Euro do pominięcia:"
            type="text"
            value={excludedEuroNumbers.join(", ")}
            onChange={(e) => {
              const { validEuroNumbers } = handleNumberValidation(
                e.target.value
              );
              setExcludedEuroNumbers(validEuroNumbers);
            }}
            variant="outlined"
            fullWidth
            placeholder="3, 4"
          />
        </div>
        <div className="mb-4 form-group">
          <Button variant="contained" color="primary" onClick={generateNumbers}>
            Generuj liczby
          </Button>
        </div>
      </div>
      <div className="mb-10 interactive-number-boards">
        <Typography variant="h6" gutterBottom>
          Główne liczby:
        </Typography>
        <InteractiveNumberBoard
          excludedNumbers={excludedMainNumbers}
          setExcludedNumbers={setExcludedMainNumbers}
          requiredNumbers={requiredMainNumbers}
          setRequiredNumbers={setRequiredMainNumbers}
          numColumns={10}
          minNumber={1}
          maxNumber={50}
        />
        <Typography variant="h6" gutterBottom className="mt-8">
          Liczby Euro:
        </Typography>
        <InteractiveNumberBoard
          excludedNumbers={excludedEuroNumbers}
          setExcludedNumbers={setExcludedEuroNumbers}
          requiredNumbers={requiredEuroNumbers}
          setRequiredNumbers={setRequiredEuroNumbers}
          numColumns={5}
          minNumber={1}
          maxNumber={12}
        />
      </div>
    </Fragment>
  );
};

export default EuroJackpotOptions;
