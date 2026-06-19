import styles from "./CardGrid.module.css";
import Card from "./Card";

export default function CardGrid({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          blurb={item.blurb}
          rating={item.rating}
          image={item.image}
        />
      ))}
    </div>
  );
}