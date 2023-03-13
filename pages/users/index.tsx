import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
 
import Users from "../../components/users/Users";
import { DataProps, User } from "../../types/types";
import { getUsersData } from "../api/getUsers";

export default function UsersPage({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <Users data={data} />;
}

export const getServerSideProps: GetServerSideProps<DataProps> = async () => {
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
