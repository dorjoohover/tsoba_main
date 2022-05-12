import Title from './Title';
import Image from 'next/image';
const Loans = () => {
	return (
		<div className="loans relative">
			<div className="relative z-30">
				<Title
					title={'зээлийн төрөл'}
					subtitle={'зээл'}
					items={'center'}
					color={'white'}
				/>
			</div>
			<span className="absolute inset-0 bg_color"></span>
			<div className="flex items-center justify-center relative z-30 mt-12">
				<div className="mr-24 loan_grid">
					<div className=" relative">
						<Image
							src={'/img/smile01.jpg'}
							alt="loan"
							layout="responsive"
							width={500}
							height={320}
						/>
					</div>
					<div className="px-6 py-8 bg-white">
						<h5 className="text_primary_color uppercase mb-2">
							<b> зээл</b>
						</h5>
						<h2 className="capitalize font-bold text-3xl tracking-wider mb-6 font-medium">
							гадаад харилцагч
						</h2>
						<p>6-р сар 1, 2022</p>
					</div>
				</div>
				<div className="loan_grid">
					<div className=" relative">
						<Image
							src={'/img/smile01.jpg'}
							alt="loan"
							layout="responsive"
							width={500}
							height={320}
						/>
					</div>
					<div className="px-6 py-8 bg-white">
						<h5 className="text_primary_color uppercase mb-2">
							<b> зээл</b>
						</h5>
						<h2 className="capitalize font-bold text-3xl tracking-wider mb-6 font-medium">
							дотоод харилцагч
						</h2>
						<p>6-р сар 1, 2022</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loans;
