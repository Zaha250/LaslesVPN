const postData = async (url, data) => {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-type": 'application/json' },
    body: data
  });

  return await res.json();
};

const getCardProduct = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Ошибка по адресу ${url}, status:${result.status}`);
  }

  return await res.json();
};

export { postData, getCardProduct };