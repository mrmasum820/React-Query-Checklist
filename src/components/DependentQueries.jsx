import axios from "axios";
import { useQuery } from "react-query";

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCoursesByHomeId = (homeId) => {
  return axios.get(`http://localhost:4000/homes/${homeId}`);
};

const DependentQueries = ({ email }) => {
  const { data: user } = useQuery(["user", email], () =>
    fetchUserByEmail(email)
  );
  const homeId = user?.data.homeId;

  useQuery(["courses", homeId], () => fetchCoursesByHomeId(homeId), {
    enabled: !!homeId,
  });

  return <div>dependent queries</div>;
};

export default DependentQueries;
