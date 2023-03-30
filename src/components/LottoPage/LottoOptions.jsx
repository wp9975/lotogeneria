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

const LottoOptions = ({ onGenerateNumbers }) => {
  const [numSets, setNumSets] = useState(1);
  const [uniqueNumbers, setUniqueNumbers] = useState(false);
  const [numberRange, setNumberRange] = useState([1, 49]);
  const [requiredNumbers, setRequiredNumbers] = useState([]);
  const [excludedNumbers, setExcludedNumbers] = useState([]);

  const generateNumbers = () => {
    const result = [];
  
    for (let i = 0; i < numSets; i++) {
      let numbers = new Set();
  
      if (requiredNumbers.length === 6) {
        numbers = new Set(requiredNumbers);
      } else {
        while (numbers.size < 6 - requiredNumbers.length) {
          const randomNumber =
            Math.floor(Math.random() * (numberRange[1] - numberRange[0] + 1)) +
            numberRange[0];
  
          if (
            (!uniqueNumbers || !result.some((set) => set.has(randomNumber))) &&
            !requiredNumbers.includes(randomNumber) &&
            !excludedNumbers.includes(randomNumber)
          ) {
            numbers.add(randomNumber);
          }
        }
      }
  
     
      const sortedSet = new Set(
        [...numbers, ...requiredNumbers].sort((a, b) => a - b)
      );
  
      if (uniqueNumbers) {
        if (!result.some((set) => areSetsEqual(set, sortedSet))) {
          result.push(sortedSet);
        }
      } else {
        result.push(sortedSet);
      }
    }
  
    onGenerateNumbers(result);
  };
  
  

  const areSetsEqual = (set1, set2) => {
    if (set1.size !== set2.size) {
      return false;
    }

    for (const item of set1) {
      if (!set2.has(item)) {
        return false;
      }
    }

    return true;
  };

  const handleNumberValidation = (input) => {
    const numbers = input.split(",").map((n) => parseInt(n.trim()));
    const validNumbers = numbers.filter((n) => !isNaN(n) && n >= 1 && n <= 49);
    return validNumbers.join(", ");
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
          <Typography id="range-slider" gutterBottom>
            Zakres liczb do losowania:
          </Typography>
          <Slider
            value={numberRange}
            onChange={(e, newValue) => setNumberRange(newValue)}
            valueLabelDisplay="auto"
            min={1}
            max={49}
            aria-labelledby="range-slider"
          />
        </div>
        <div className="mb-4 form-group">
          <TextField
            label="Liczby pewne do wylosowania:"
            type="text"
            value={requiredNumbers.join(", ")}
            onChange={(e) =>
              setRequiredNumbers(handleNumberValidation(e.target.value))
            }
            variant="outlined"
            fullWidth
            placeholder="1, 2, 3, 4, 5, 6"
          />
        </div>
        <div className="mb-4 form-group">
          <TextField
            label="Liczby do pominięcia:"
            type="text"
            value={excludedNumbers.join(", ")}
            onChange={(e) =>
              setExcludedNumbers(handleNumberValidation(e.target.value))
            }
            variant="outlined"
            fullWidth
            placeholder="7, 8, 9, 10, 11, 12"
          />
        </div>
        <div className="mb-4 form-group">
          <Button variant="contained" color="primary" onClick={generateNumbers}>
            Generuj liczby
          </Button>
        </div>
      </div>
      <div>
        <InteractiveNumberBoard
          excludedNumbers={excludedNumbers}
          setExcludedNumbers={setExcludedNumbers}
          requiredNumbers={requiredNumbers}
          setRequiredNumbers={setRequiredNumbers}
          numColumns={5}
          minNumber={1}
          maxNumber={49}
        />
      </div>
    </Fragment>
  );
};

export default LottoOptions;
