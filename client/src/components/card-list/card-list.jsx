import {useLayoutEffect, useState} from 'react';
import {getDeals} from "../../api/api.js";
import Card from "../card/card.jsx";
import './card-list.css'



const CardList = () => {
  const [deals, setDeals] = useState([]);
  const [openedCardId, setOpenedCardId] = useState(null);

  useLayoutEffect(() => {
    const fetchDeals = async () => {
      const fetchedDeals = await getDeals(); // Получаем данные асинхронно
      setDeals(fetchedDeals); // Устанавливаем данные в состояние
    };

    fetchDeals(); // Вызов функции
    console.log(deals)
  }, []);

  function handleSetOpenCard(id) {
    if (openedCardId !== id) {setOpenedCardId(id)}
  }

  return (
      <ul className="list__container card_list">
        {deals?.map((deal) => (
          <Card deal={deal} key={deal.id} handleSetOpenCard={handleSetOpenCard} isOpen={ openedCardId === deal.id } />
        ))}
      </ul>
  );
};

export default CardList;
