import { format } from "date-fns";
import clsx from "clsx";

import { viewStore } from "../store/view";
import { useContext } from "react";
import { DateContext } from "../context/DateContext";

interface ListMonthsProps {}

const months = [
  { spanish: "Enero", english: "January", value: 0 },
  { spanish: "Febrero", english: "February", value: 1 },
  { spanish: "Marzo", english: "March", value: 2 },
  { spanish: "Abril", english: "April", value: 3 },
  { spanish: "Mayo", english: "May", value: 4 },
  { spanish: "Junio", english: "June", value: 5 },
  { spanish: "Julio", english: "July", value: 6 },
  { spanish: "Agosto", english: "August", value: 7 },
  { spanish: "Septiembre", english: "September", value: 8 },
  { spanish: "Octubre", english: "October", value: 9 },
  { spanish: "Noviembre", english: "November", value: 10 },
  { spanish: "Diciembre", english: "December", value: 11 },
];

const ListMonths: React.FC<ListMonthsProps> = () => {
  const { date, setMonth } = useContext(DateContext);

  const setActiveView = viewStore((state) => state.setActiveView);

  return (
    <div>
      <header>
        <button
          onClick={() => setActiveView("years")}
          className="hover:border-transparent py-1 px-3 hover:bg-gray-200/30 rounded-md text-lg font-semibold text-gray-800"
        >
          {format(date, "yyyy")}
        </button>
      </header>

      <div className="grid grid-cols-3 gap-2 mt-2">
        {months.map((month, index) => (
          <button
            onClick={() => {
              setMonth(month.value);
              setActiveView("calendar");
            }}
            className={clsx(
              "p-2 hover:bg-gray-100 text-gray-600 rounded-md uppercase",
              format(date, "MMMM") === month.english
                ? "bg-red-600 text-white hover:bg-red-500"
                : ""
            )}
            key={index}
          >
            {month.english.slice(0, 3)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ListMonths;
