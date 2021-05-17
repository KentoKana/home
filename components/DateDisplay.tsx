interface IDateDisplayProps {
  date: string;
}
export const DateDisplay = ({ date }: IDateDisplayProps) => {
  const months: { [monthIndex: number]: string } = {
    [0]: "January",
    [1]: "February",
    [2]: "March",
    [3]: "April",
    [4]: "May",
    [5]: "June",
    [6]: "July",
    [7]: "August",
    [8]: "September",
    [9]: "October",
    [10]: "November",
    [11]: "December",
  };
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = months[dateObj.getMonth()].toUpperCase();
  const day = dateObj.getDate();

  const formattedDateString = `${month} ${day}, ${year}`;
  return <>{formattedDateString}</>;
};
