import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import A11yLogo from "./assets/LogoMark.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const location = useLocation();
	return (
		<div className='App'>
			<div>
				<Link to='/'>
					<img src={A11yLogo} className='logo m-auto' alt='a11y 新手村 logo' />
				</Link>
				<a
					href='https://medium.com/@accessdiversers'
					target='_blank'
					className='mr-10'>
					medium
				</a>
				<a href='https://www.facebook.com/accessdiversers/' target='_blank'>
					Facebook
				</a>
			</div>
			<div className='card'>
				<h1>a11y 新手村</h1>
				<p>Step-by-Step Guide to Developing an Accessible Tab with ChatGPT</p>
				{location.pathname == "/" ? <Link to='/steps/1'>Go</Link> : null}
			</div>
			<Outlet />
			<p className='read-the-docs'>Go to our blog to learn more</p>
		</div>
	);
}

export default App;
