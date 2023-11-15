import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Chat from '../chat/Chat';

const Layout = () => {
    return (
        <div className={styles.layout}>
            <div><Outlet /></div>
            <div><Chat /></div>
        </div>
    );
};

export default Layout;