let base = "http://localhost:5000";
export const fetchData = async (url, options) => {
  const res = await fetch(`${base}${url}`, options);
  const data = await res.json();  
  console.log(data)
  return data;
};
