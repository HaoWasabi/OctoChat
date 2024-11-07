import { Text } from "react-native";
import { Redirect } from "expo-router";
import { useSession } from "../components/Seesionprovider";

const index = () => {
  const { session, isLoading } = useSession();
  // signOut();
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href="/login" />;
  }

  return <Redirect href={`/${JSON.parse(session).id}/1`} />;
};

export default index;
