import React, {useState, useEffect, useCallback} from 'react';
import './card.css'
import StatusCircle from "../status-circle/status-circle.jsx";
import LoadingCircle from "../loading-circle/loading-circle.jsx";
// eslint-disable-next-line react/prop-types
const Card = ({deal, handleSetOpenCard, isOpen}) => {
  const [loading, setLoading] = useState(true);
// eslint-disable-next-line react/prop-types
  const {id, name, price, closest_task_at} = deal;
  const date = new Date(closest_task_at * 1000).toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).replace(/\//g, '.'); // Заменяем "/" на "." для нужного формата


  useEffect(() => {
    // Имитация загрузки на 1 секунду
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  })


  const handleOpenCard = useCallback((id) => {
    if (!isOpen) {
      handleSetOpenCard(id)
      setLoading(true)
    }
  }, [handleSetOpenCard]);


  return (
    <li className={`card__container ${isOpen ? 'open' : ''}`} onClick={() => handleOpenCard(id)}>
      <div className="card__header">
        <p className="card_id">ID: {id}</p>
        <p className="card_name">{name}</p>
        <p className="card_price">Цена: {price}</p>
      </div>

      <div className="card__details">
        {loading ? <LoadingCircle/> : (
          <>
            <p>Дата задачи: {closest_task_at && date}</p>
            <div className="card__status">
              <p>Статус задачи:</p>
              <StatusCircle taskDate={closest_task_at}/>
            </div>
          </>)
        }
      </div>
    </li>

)
  ;
};

export default React.memo(Card);
