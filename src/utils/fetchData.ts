export const fetchData = async <T>(url: string): Promise<T | undefined> => {
  try {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};