import {useRouter} from "next/router";
import React, {useState} from "react";
import Container from "@/resources/components/Container/Container";
import Skeleton from "@/resources/components/Skeleton/Skeleton";
import styles from "@/resources/css/Profile.module.css";
import randomColor from "@/utils/randomColor";

const [randomColor1, randomColor2, randomColor3, randomColor4] = [
  randomColor(),
  randomColor(),
  randomColor(),
  randomColor(),
];

export default function ProfilePage() {
  const router = useRouter();
  const [tab, setTab] = useState<"basic" | "stats">("basic");

  return (
    <Container maxWidth="lg">
      <div className={styles.profileHeader}>
        <div
          className={styles.coverImage}
          style={{
            background: `linear-gradient(90deg, ${randomColor1}, ${randomColor2})`,
          }}
        />
        <div
          className={styles.profilePicture}
          style={{
            background: `linear-gradient(90deg, ${randomColor3}, ${randomColor4})`,
          }}
        />
        <h1 className={styles.profileName}>
          {router.query.address ? (
            router.query.address.toString().substring(0, 4) +
            "..." +
            router.query.address.toString().substring(38, 42)
          ) : (
            <Skeleton width="320"/>
          )}
        </h1>
      </div>

      <div className={styles.tabs}>
        <h3
          className={`${styles.tab}
        ${tab === "basic" ? styles.activeTab : ""}`}
          onClick={() => setTab("basic")}
        >
          Basic Info
        </h3>
        <h3
          className={`${styles.tab}
        ${tab === "stats" ? styles.activeTab : ""}`}
          onClick={() => setTab("stats")}
        >
          User statistics
        </h3>
      </div>

      <div
        className={`${
          tab === "basic" ? styles.activeTabContent : styles.tabContent
        }`}
      >
        Test
      </div>

      <div
        className={`${
          tab === "stats" ? styles.activeTabContent : styles.tabContent
        }`}
      >
        test
      </div>
    </Container>
  );
}
