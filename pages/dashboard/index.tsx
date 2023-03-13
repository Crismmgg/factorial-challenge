import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import Dashboard from "../../components/dashboard/Dashboard";
import { DataProps, User } from "../../types/types";
import { getUsersData } from "../api/getUsers";

export default function DashboardPage({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <Dashboard data={data} />;
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
