import styles from "./styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

const Navbar = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<Link to="/" style={{ textDecoration: 'none' }}><h1>DV Social Restaurant</h1></Link>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>

		</div>
	);
};

export default Navbar;
