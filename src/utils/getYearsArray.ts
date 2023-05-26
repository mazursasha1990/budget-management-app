const getYearsArray = (): number[] => {
  const years: number[] = [];
  const currentYear = new Date().getFullYear();
  for (let year = currentYear; year >= currentYear - 100; year--) {
    years.push(year);
  }

  return years;
};

export default getYearsArray;
