import PropTypes from "prop-types";
import css from "./Statistics.module.css";

function colorBg() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      {/* <h2 className={css.title}>Upload stats</h2> */}
      <ul className={css.stat__list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li className={css.item} key={id} style={{ backgroundColor: colorBg() }}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  )
};

Statistics.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};