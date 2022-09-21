import Menu from "../Menu";
import styles from './styles.module.scss';

export default function Layout({ children }) {
    return (
        <div className={styles.content}>
            <Menu />
            <main>{children}</main>
        </div>
    )
}