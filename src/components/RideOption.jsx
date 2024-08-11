import styles from './RideOption.module.css'; 

const RideOption = ({ service, type, price, eta }) => {
    return (
        <div className={styles.rideOption}>
            <p className={styles.rideService}>{service}</p>
            <p className={styles.rideType}>Vehicle: {type}</p>
            <p className={styles.ridePrice}>Price: ${price.toFixed(2)}</p>
            <p className={styles.rideEta}>ETA: {eta} mins</p>
        </div>
    )
}

export default RideOption;