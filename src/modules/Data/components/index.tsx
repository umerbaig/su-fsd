import React, { useState, FC } from "react";
import { useDataApi } from "../../../hooks/useDataApi";
import Error from "../../../components/Error";
import Loading from "../../../components/Loader";

const Data: FC = () => {
  const options = [
    { name: "Sort by Ascending", value: "asc" },
    { name: "Sort by Created At", value: "created_at" },
    { name: "Sort by Descending", value: "desc" },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0].value);
  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };
  const [data, isLoading, error] = useDataApi(
    `data?sort_by=${selectedOption}`,
    []
  );

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-bold mb-4">Select an option</h1>
      <div className="w-64 mb-4">
        <select
          id="dropdown"
          name="dropdown"
          value={selectedOption}
          onChange={handleOptionChange}
          className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Filtered List:</h2>
        {error ? (
          <Error message="Something went wrong" />
        ) : isLoading ? (
          <Loading />
        ) : (
          <>
            <ul className="grid grid-cols-2 gap-4 mt-4">
              {data.map((item, index) => (
                <li key={index} className="bg-gray-100 p-2 rounded-md">
                  <span className="mr-10">{item.date}</span>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Data;
