// components/FAQSection.js
import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMore, Remove } from "@mui/icons-material";

const faqData = [
    {
      question: "Jakie gry liczbowe oferuje aplikacja LotoGeneneria?",
      answer: "Aplikacja LotoGeneneria oferuje trzy popularne gry liczbowe: Lotto, EuroJackpot i MiniLotto.",
    },
    {
      question: "Czy korzystanie z aplikacji LotoGeneneria jest bezpieczne?",
      answer: "Tak, korzystanie z aplikacji LotoGeneneria jest bezpieczne. Staramy się zapewnić najlepsze standardy bezpieczeństwa i prywatności naszych użytkowników.",
    },
    {
      question: "Czy mogę korzystać z aplikacji LotoGeneneria na różnych urządzeniach?",
      answer: "Tak, aplikacja LotoGeneneria jest w pełni responsywna i działa na różnych urządzeniach, w tym na komputerach, tabletach i smartfonach.",
    },
    {
      question: "Czy muszę płacić, aby korzystać z aplikacji LotoGeneneria?",
      answer: "Nie, korzystanie z aplikacji LotoGeneneria jest całkowicie darmowe. Nie pobieramy żadnych opłat ani nie wymagamy rejestracji użytkowników.",
    },
    {
      question: "Czy aplikacja LotoGeneneria gwarantuje wygraną w grach liczbowych?",
      answer: "Nie, aplikacja LotoGeneneria nie gwarantuje wygranej w grach liczbowych. Służy jedynie jako narzędzie do generowania liczb, które mogą pomóc w wyborze szczęśliwych numerów do gier.",
    },
  ];
  

const FAQSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box className="mx-auto faq-section max-w-screen-2xl" py={8}>
      <Typography variant="h4" component="h2" mb={4} textAlign="center">
        Często zadawane pytania
      </Typography>
      {faqData.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          className="mb-2"
        >
          <AccordionSummary
            expandIcon={
              expanded === index ? (
                <Remove className="text-white bg-gray-500 rounded-full" />
              ) : (
                <ExpandMore className="text-white bg-yellow-500 rounded-full" />
              )
            }
          >
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQSection;
