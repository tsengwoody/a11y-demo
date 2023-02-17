import Step1 from "../Tabs/step1.jsx";
import Step2 from "../Tabs/step2.jsx";
import Step3 from "../Tabs/step3.jsx";
import Step4 from "../Tabs/step4.jsx";
import Step5 from "../Tabs/step5.jsx";
import Step6 from "../Tabs/step6.jsx";

import { useEffect, useRef } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";

export async function loader({ params }) {
	const stepsData = {
		1: {
			component: Step1,
			next: "2",
		},
		2: {
			component: Step2,
			next: "3",
			previous: "1",
		},
		3: {
			component: Step3,
			next: "4",
			previous: "2",
		},
		4: {
			component: Step4,
			next: "5",
			previous: "3",
		},
		5: {
			component: Step5,
			next: "6",
			previous: "4",
		},
		6: {
			component: Step6,
			previous: "5",
		},
	};
	return await Promise.resolve({
		...stepsData[params.step],
		step: params.step,
	});
}

export default function Layout() {
	const headingRef = useRef(null);
	const data = useLoaderData();
	const Component = data.component;

	useEffect(() => {
		// headingRef.current.focus();
	}, [data]);

	return (
		<div>
			<h2 className='mb-2.5' ref={headingRef} aria-live='polite'>
				step {data.step}
			</h2>
			<div className='flex items-center justify-between'>
				{data.previous ? (
					<Link to={`/steps/${data.previous}`} className='w-20'>
						<i aria-hidden='true' className='fa-solid fa-chevron-left'></i>{" "}
						previous
					</Link>
				) : (
					<span className='invisible w-20' />
				)}
				<div className='w-6/12 rounded-lg shadow text-black border-2 border-red-700'>
					<hr />
					<div role='region' aria-label='demo' className='p-4'>
						<Component />
					</div>
					<hr />
				</div>
				{data.next ? (
					<Link to={`/steps/${data.next}`} className='w-20'>
						next{" "}
						<i aria-hidden='true' className='fa-solid fa-chevron-right'></i>
					</Link>
				) : (
					<span className='invisible w-20' />
				)}
			</div>
		</div>
	);
}
