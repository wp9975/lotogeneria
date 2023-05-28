import React from "react";
import { motion } from "framer-motion";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useInView } from "react-intersection-observer";

const ContactSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Add form validation and send data to backend
  };

  return (
    <div className="relative w-full h-full overflow-hidden contact-us-section">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
        transition={{ duration: 0.5 }}
        className="my-4 justify-evenly md:flex"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="p-8 bg-white rounded-md shadow-lg md:w-1/2 lg:w-1/3"
        >
          <Typography variant="h4" component="h2">
            Skontaktuj się z nami
          </Typography>
          <Typography variant="body1" className="my-4">
            Masz pytania lub uwagi? Skontaktuj się z nami i postaramy się pomóc
          </Typography>
          <Typography variant="body1" className="my-4">
            Adres: ul. Przykładowa 1, 00-000 Warszawa
          </Typography>
          <Typography variant="body1" className="my-4">
            Telefon: +48 123 456 789
          </Typography>
          <Typography variant="body1" className="my-4">
            Email: kontakt@lotogeneria.com
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="right-0 z-20 p-8 bg-white rounded-md shadow-lg md:w-1/2 lg:w-1/3 contact-us-form"
          component="form"
          onSubmit={handleSubmit}
        >
          <Typography variant="h5" component="h3" mb={4}>
            Formularz kontaktowy
          </Typography>
          <TextField
            fullWidth
            label="Imię"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Numer telefonu (opcjonalnie)"
            type="tel"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Wiadomość"
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="mt-4"
          >
            Wyślij
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactSection;
