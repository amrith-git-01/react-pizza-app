import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
	// const className =
	// 	"inline-block px-4 py-3 font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full text-stone-800 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4";

	const base =
		"inline-block font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full text-stone-800 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed text-sm";

	const styles = {
		primary: base + " px-4 py-3 sm:px-6 sm:py-4",
		small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
		round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
		secondary:
			"inline-block font-semibold tracking-wide uppercase border-2 border-stone-300 transition-colors duration-300 bg-transparent rounded-full text-stone-500 hover:bg-stone-300 focus:outline-none focus:ring hover:text-stone-800 focus:text-stone-800 focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5 text-sm",
	};

	if (to) {
		return (
			<Link className={styles[type]} to={to}>
				{children}
			</Link>
		);
	}

	if (onClick) {
		return (
			<button onClick={onClick} disabled={disabled} className={styles[type]}>
				{children}
			</button>
		);
	}

	return (
		<button disabled={disabled} className={styles[type]}>
			{children}
		</button>
	);
}

export default Button;
