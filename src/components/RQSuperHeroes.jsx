import { Link } from "react-router-dom";
import {
  useAddSuperHeroData,
  useSuperHeroesData,
} from "../hooks/useSuperHeroesData";
import { useState } from "react";

const RQSuperHeroes = () => {
  const [name, setName] = useState("");
  const [alter, setAlter] = useState("");

  const onSuccess = (data) => {
    console.log("perform side effect after data fetching", data);
  };

  const onError = (error) => {
    console.log("perform side effect after encountering error", error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

  // console.log({ isLoading, isFetching });

  const { mutate: addHero } = useAddSuperHeroData();

  const handleAddHeroClick = () => {
    console.log({ name, alter });
    const hero = { name, alter };
    addHero(hero);
  };

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div style={{ paddingLeft: "20px" }}>
      <h2>RQ Super Heroes page</h2>

      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alter}
          onChange={(e) => setAlter(e.target.value)}
        />
        <button onClick={handleAddHeroClick}>Add hero</button>
      </div>

      <button onClick={refetch}>Fetch heroes</button>

      {data?.data?.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}

      {/* {data.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })} */}
    </div>
  );
};

export default RQSuperHeroes;

/*
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      // cacheTime: 5000,  //query cache
      // staleTime: 30000, //stale time
      // refetchOnMount: true,  //refetch
      // refetchOnWindowFocus: true,
      // refetchInterval: 2000,  //polling
      // refetchIntervalInBackground: true,
      // enabled: false,  //refetch on click
      onSuccess, //success and error callbacks
      onError,
      select: (data) => {
        const superHeroNames = data.data.map((hero) => hero.name);
        return superHeroNames;
      },
    }
  );
  */
