import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getUsersData } from "./api/getUsers";
import { User } from "../utils/types";

interface UsersData {
  data: User[];
}

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log({ data });
  return <div>Hi there!</div>;
}

export const getServerSideProps: GetServerSideProps<UsersData> = async () => {
  try {
    const data: User[] = await getUsersData();
    return { props: { data } };
  } catch (e) {
    console.log(e);
    return {
      props: { data: [] },
    };
  }
};
