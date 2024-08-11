import RideOption from './RideOption';
import styles from './RideOptionsList.module.css';

const RideOptionsList = ({ rideOptions }) => {
  return (
    <div className={styles.rideOptionsList}>
      {rideOptions.map((option, index) => (
        <RideOption key={index} {...option} />
      ))}
    </div>
  );
};

export default RideOptionsList;