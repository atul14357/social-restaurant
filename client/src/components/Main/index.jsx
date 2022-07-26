import styles from "./styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
 import Home from '../Pages/Home/home'
 import Navbar from '../Navbar/index'
 import {Link} from 'react-router-dom'

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<Navbar />
			
			<div className={styles.container_card}>
				<Link to="/menu" style={{ textDecoration: 'none' }}><Home img="https://previews.123rf.com/images/artqu/artqu1608/artqu160800161/62247946-restaurant-menu-card-design-template-creative-vector-.jpg" title="MENU-CARD" /></Link>
				<Link to="/special-today" style={{ textDecoration: 'none' }}><Home img="https://i.pinimg.com/736x/b4/4f/29/b44f298ee44e9a38a890d61fb2c06126.jpg" title="TODAY'S SPECIAL"/></Link>
				<Link to="/reviews" style={{ textDecoration: 'none' }}><Home img="https://media.istockphoto.com/photos/consumer-reviews-concepts-with-bubble-people-review-comments-and-or-picture-id1208411337?k=20&m=1208411337&s=612x612&w=0&h=4YErwcVZ65c9lhceunf1jFvZimZfLYd0hMIWlLG7PF0=" title="REVIEW"/></Link>
			</div>

		</div>
	);
};

export default Main;
