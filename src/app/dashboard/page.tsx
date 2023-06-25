import React from "react";
import styles from "./page.module.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const Dashboard = () => {
  return <div className={styles.container}>Dashboard</div>;
};

export default Dashboard;
