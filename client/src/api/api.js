export const getDeals = async () => {
  const url = 'https://test-by-emfy.vercel.app/api/deals';

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }

    const data = await response.json();
    const deals = data._embedded.leads; // Предполагается, что это массив
    console.log(deals); // Данные о сделках
    return deals; // Возвращаем массив сделок
  } catch (error) {
    console.error('Ошибка: ', error);
    return []; // Возвращаем пустой массив в случае ошибки
  }
};
