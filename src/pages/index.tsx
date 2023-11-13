import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "@/resources/css/Home.module.css";
import userModel from "@/library/models/user.model";
import userFactory from "@/database/factory/user.factory";

export async function getServerSideProps() {
  const userFac = await userFactory.create(5)
  const user = await userModel
    .find('0x445E5C0c19b79DA560DB4E253587C93213B0D415', 'walletAddress')

  return {props: {user: JSON.parse(JSON.stringify(user)), userFac: JSON.parse(JSON.stringify(userFac))}}
}

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = (props) => {
  console.log(props)
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroBackgroundInner}>
              <Image
                src="/hero-gradient.png"
                width={1390}
                height={1390}
                alt="Background gradient from red to blue"
                quality={100}
                className={styles.gradient}
              />
            </div>
          </div>
          <div className={styles.heroAssetFrame}>
            <Image
                priority={true}
              src="https://placehold.co/600x400/png"
              width={860}
              height={540}
              alt="Hero asset"
              quality={100}
              className={styles.heroAsset}
            />
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  Build a Dapp
                </span>
                <br />
                faster than ever.
              </h1>

              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href="#">
                  Get Started
                </Link>
                <Link
                  className={styles.secondaryCta}
                  href="#"
                  target="_blank"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
