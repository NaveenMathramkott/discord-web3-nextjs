import Image from "next/image";
import styles from "../styles/dmCard.module.css";
import { useRouter } from "next/navigation";
import nft from "../assets/nft.jpg";

const DmCard = ({ name, status, avatar, id }) => {
  const router = useRouter();

  const changeUrl = () => {
    router.push(`?conversation=${id}&name=${name}`);
  };

  return (
    <div className={styles.dmCard} onClick={changeUrl}>
      <div className={styles.dmAvatarContainer}>
        <Image
          src={avatar || nft}
          className={styles.dmAvatar}
          height={48}
          width={48}
          alt={`ava`}
        />
        <div className={styles.dmCardStatus} id={status} />
      </div>
      <p className={styles.dmCardName}>{name}</p>
    </div>
  );
};

export default DmCard;
