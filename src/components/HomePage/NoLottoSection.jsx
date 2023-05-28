import { Box, Typography, Button } from "@mui/material";
import { FaExclamationTriangle } from "react-icons/fa";

const NoLottoSection = () => {
  return (
    <Box className="py-16 bg-gray-100">
      <div className="max-w-screen-lg px-4 mx-auto sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <FaExclamationTriangle className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
          <Typography
            variant="h2"
            className="mt-2 mb-6 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl"
          >
            Dlaczego nie warto grać w gry liczbowe takie jak lotto?
          </Typography>
        </div>
        <Box className="mt-10">
          <Typography variant="h4" className="mb-2 font-medium">
            1. Szansa na wygraną jest bardzo mała
          </Typography>
          <Typography variant="body1" className="mb-6">
            Statystycznie szansa na wygraną w loterii jest bardzo niska.
            Przykładowo, szansa na trafienie głównej wygranej w Lotto wynosi 1
            do ponad 13 milionów, co oznacza, że jest to mniej prawdopodobne niż
            trafienie w co najmniej trzy razy przez piorun.
          </Typography>
          <Typography variant="h4" className="mb-2 font-medium">
            2. Gry liczbowe mogą być uzależniające
          </Typography>
          <Typography variant="body1" className="mb-6">
            Gra w gry liczbowe, takie jak Lotto, może prowadzić do uzależnienia
            od hazardu. Warto pamiętać, że takie uzależnienie ma negatywny wpływ
            na zdrowie psychiczne i finansowe.
          </Typography>
          <Typography variant="h4" className="mb-2 font-medium">
            3. Wygrane nie są tak wysokie, jak się wydaje
          </Typography>
          <Typography variant="body1" className="mb-6">
            Chociaż wygrane w loteriach mogą wydawać się ogromne, to w
            rzeczywistości wartość wygranej jest często znacznie mniejsza niż
            liczba wygranych. Oznacza to, że gracze często wydają więcej
            pieniędzy na loterie, niż zdobywają w nagrodach.
          </Typography>
          <Typography variant="h4" className="mb-2 font-medium">
            4. Pieniądze można wykorzystać na wiele innych sposobów
          </Typography>
          <Typography variant="body1" className="mb-6">
            Zamiast wydawać pieniądze na gry liczbowe, warto zastanowić się, czy
            nie można przeznaczyć ich na coś bardziej wartościowego. Można na
            przykład zainwestować w edukację, rozwijanie umie
          </Typography>
          <Typography variant="body1" className="mb-6">
            Warto też zastanowić się nad tym, że szansa na wygraną w loterii
            jest zwykle bardzo mała, co oznacza, że pieniądze wydane na zakup
            losów mogą być po prostu stracone. Zamiast polegać na szczęściu,
            lepiej skupić się na osiąganiu celów poprzez ciężką pracę i
            rozwijanie swoich umiejętności.
          </Typography>
          <Typography variant="body1" className="mb-6">
            Istnieją także różne formy hazardu, w których łatwo można wpaść w
            nałóg i stracić kontrolę nad wydatkami. Dlatego warto uważać na to,
            w co się gra i jak dużo się na to wydaje. Warto też szukać
            alternatywnych form rozrywki, które nie niosą ze sobą ryzyka
            uzależnienia i strat finansowych.
          </Typography>
          <Typography variant="body1" className="mb-6">
            Podsumowując, warto zastanowić się, czy gra w gry liczbowe jest dla
            nas dobrym wyborem. Jeśli chcemy zainwestować swoje pieniądze w coś
            wartościowego, lepiej szukać innych sposobów na osiągnięcie swoich
            celów.
          </Typography>
        </Box>
      </div>
    </Box>
  );
};
export default NoLottoSection;
