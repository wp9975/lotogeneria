// components/DescriptionSection.js
import React from 'react';
import LottoIcon from '../../assets/icons/lotto.png';
import JackpotIcon from '../../assets/icons/jackpot.png';
import MiniIcon from '../../assets/icons/lottery.png';
import { Typography } from '@mui/material';
const GameCard = ({ icon, title, description }) => {
  return (
    <div className="p-4 transition duration-200 ease-in transform bg-white rounded-md shadow-md hover:rotate-3 hover:shadow-lg">
      <div className="text-center">
        <img src={icon} alt={title} className="w-16 h-16 mx-auto mb-4" />
        <h3 className="my-2 text-3xl font-bold">{title}</h3>
        <p className="m-1 text-lg">{description}</p>
      </div>
    </div>
  );
};

const DescriptionSection = () => {
  const games = [
    {
      icon: LottoIcon,
      title: 'Lotto',
      description: 'Lotto to jedna z najpopularniejszych gier liczbowych w Polsce. Aby wygrać, należy wytypować sześć spośród czterdziestu dziewięciu liczb. Szansa na trafienie głównej wygranej wynosi 1 do ponad 13 milionów. W Lotto istnieją cztery stopnie wygranych. Nagrody są uzależnione od liczby trafionych liczb oraz ilości zawartych zakładów.',
    },
    {
      icon: JackpotIcon,
      title: 'EuroJackPot',
      description: 'EuroJackpot to gra liczbowa organizowana w Europie. Aby wygrać, należy wytypować pięć spośród pięćdziesięciu liczb oraz dwie spośród dziesięciu tzw. "gwiazdek". Szansa na trafienie głównej wygranej wynosi 1 do ponad 95 milionów. W EuroJackpot istnieją dwanaście stopni wygranych. Nagrody są uzależnione od liczby trafionych liczb oraz ilości zawartych zakładów.',
    },
    {
      icon: MiniIcon,
      title: 'MiniLotto',
      description: 'MiniLotto to gra liczbowa, w której należy wytypować pięć spośród trzydziestu siedmiu liczb. Szansa na trafienie głównej wygranej wynosi 1 do ponad 850 tysięcy. W MiniLotto istnieją cztery stopnie wygranych. Nagrody są uzależnione od liczby trafionych liczb oraz ilości zawartych zakładów.',
    },
  ];
  

  return (
    <div className="p-4 max-w-[2000px] mx-auto">
      <Typography variant="h4" component="h2" mb={4} textAlign="center">
        W LotoGeneria oferujemy trzy popularne gry loteryjne:
      </Typography>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        {games.map((game, index) => (
          <GameCard
            key={index}
            icon={game.icon}
            title={game.title}
            description={game.description}
          />
        ))}
      </div>
    </div>
  );
};

export default DescriptionSection;
