import { useEffect, useState } from "react";
import StatsCard from "../../components/cards/StatsCard";
import Loader from "../../components/loader/Loader";
import { API_URL_CART, GET } from "../../constants/api_vars";
import { useFetch } from "../../hooks/useFetch";

// utils
import getStats from "../../utils/getStats";

export default function Stats() {
  const { data, isPending, error } = useFetch(API_URL_CART, GET);

  const [stats, setStats] = useState([]);

  useEffect(() => {
    if (data) {
      setStats(data);
    }
  }, [data]);

  const arrayStats = stats && [
    {
      title: "Top 5 sales",
      value: getStats(5, stats, "top"),
    },
    {
      title: "Top 5 unique sales",
      value: getStats(5, stats, "uniq"),
    },
    {
      title: "Sold out the last 5 days $",
      value: getStats(5, stats, "last"),
    },
  ];

  return (
    <div className="container">
      {error && <p className="red">{error}</p>}
      {isPending && <Loader />}
      {data && <StatsCard stats={arrayStats} />}
    </div>
  );
}
