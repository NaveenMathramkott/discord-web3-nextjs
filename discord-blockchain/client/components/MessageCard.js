import Image from "next/image";
import styles from "../styles/messageCard.module.css";
import nft from "../assets/nft.jpg";

const MessageCard = ({ avatar, sender, timestamp, content }) => {
  return (
    <div className={styles.messageCard}>
      <div className={styles.messageAvatarContainer}>
        <Image
          height={40}
          width={40}
          src={avatar || nft}
          className={styles.messageAvatar}
          alt={`ava`}
        />
      </div>

      <div>
        <div className={styles.messageDetails}>
          <p className={styles.sender}>{sender}</p>
          <small className={styles.timestamp}>{timestamp}</small>
        </div>
        <p className={styles.messageText}>{content}</p>
      </div>
    </div>
  );
};

export default MessageCard;
