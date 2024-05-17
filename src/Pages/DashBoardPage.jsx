import dashboardBG from "../assets/video/dashboardBG.mp4";

const DashBoardPage = () => {
	return (
		<div className='w-full h-full overscroll-none'>
			<div className='w-full absolute -z-10'>
				<video className='w-full h-[1300px] object-cover' autoPlay muted>
					<source src={dashboardBG} type='video/mp4' />
				</video>
			</div>
			<div className='w-full h-dvh flex flex-col z-20 py-24'>
				<h1 className='text-white text-5xl mx-auto my-12 bg-black/50 px-12 py-2 rounded-full uppercase font-thin'>Dashboard and App News</h1>
				<div className='bg-black w-fit h-full text-white mx-auto text-center text-3xl px-12 py-24 rounded-2xl shadow-black shadow-2xl font-thin'>
					<h1>Here are some updates</h1>
					<h1>Here are some updates</h1>
					<h1>Here are some updates</h1>
					<h1>Here are some updates</h1>
					<h1>Here are some updates</h1>
					<h1>Here are some updates</h1>
					<h1>Here are some updates</h1>
					<h1>Here are some updates</h1>
				</div>
			</div>
		</div>
	);
};

export default DashBoardPage;
