import { useEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import OuterContainer from './components/OuterContainer'
import TradingViewWidget from './components/TradingViewWidget'
import ComponentContent from './components/ComponentContent'
import intialDistributionImage from './assets/intial-distribution-image.png'
import profile1 from './assets/profile1.png'
import profile2 from './assets/profile2.png'
import profile3 from './assets/profile3.png'
import keyEvent1 from './assets/key-event-1.svg'
import keyEvent2 from './assets/key-event-2.svg'
import bannerImage1 from './assets/banner-image-1.svg'
import TeamProfile from './components/TeamProfile'
import { ScrollCards } from './components/ScrollCards'
import EventCard from './components/EventCard'
import GradientBgCard from './components/GradientBgCard'
import Button from './components/Button'
import axios from 'axios'
import MiniChart from './components/MiniChart'
import CoinHeader from './components/CoinHeader'


const eventCards = [
	{
		id: 1,
		imgSrc: keyEvent1,
		heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sunt et ipsa iusto unde. Itaque?",
		paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reprehenderit dolorum illum molestias quam, porro similique quae cum rem enim corporis. Necessitatibus nam quae omnis dignissimos natus voluptatibus distinctio aliquid, sequi id in pariatur. Asperiores molestiae iure earum esse officiis quasi tenetur voluptates quia et, labore minima! A, rem doloremque.",
		bgColor: "#E8F5FC"
	},
	{
		id: 2,
		imgSrc: keyEvent2,
		heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sunt et ipsa iusto unde. Itaque?",
		paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reprehenderit dolorum illum molestias quam, porro similique quae cum rem enim corporis. Necessitatibus nam quae omnis dignissimos natus voluptatibus distinctio aliquid, sequi id in pariatur. Asperiores molestiae iure earum esse officiis quasi tenetur voluptates quia et, labore minima! A, rem doloremque.",
		bgColor: "#EAF8F4"
	},
	{
		id: 3,
		imgSrc: keyEvent1,
		heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sunt et ipsa iusto unde. Itaque?",
		paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reprehenderit dolorum illum molestias quam, porro similique quae cum rem enim corporis. Necessitatibus nam quae omnis dignissimos natus voluptatibus distinctio aliquid, sequi id in pariatur. Asperiores molestiae iure earum esse officiis quasi tenetur voluptates quia et, labore minima! A, rem doloremque.",
		bgColor: "#EDE9FE"
	},
	{
		id: 4,
		imgSrc: keyEvent2,
		heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sunt et ipsa iusto unde. Itaque?",
		paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore reprehenderit dolorum illum molestias quam, porro similique quae cum rem enim corporis. Necessitatibus nam quae omnis dignissimos natus voluptatibus distinctio aliquid, sequi id in pariatur. Asperiores molestiae iure earum esse officiis quasi tenetur voluptates quia et, labore minima! A, rem doloremque.",
		bgColor: "#EAF8F4"
	}
]

const teamMembers = [
	{
		id: 1,
		name: "John Smith",
		designation: "Designation here",
		imgSrc: profile1
	},
	{
		id: 2,
		name: "Elina Williams",
		designation: "Designation here",
		imgSrc: profile2
	},
	{
		id: 3,
		name: "John Smith",
		designation: "Designation here",
		imgSrc: profile3
	}
]




function App() {

	const [coinName, setCoinName] = useState("BTCUSD");
	const [scrollPosition, setScrollPosition] = useState(0);
	
	const [trendingCoins, setTrendingCoins] = useState([]);

	useEffect(() => {
		axios.get("https://api.coingecko.com/api/v3/search/trending")
		// .then(res => setTrendingCoins(res.data))
		.then((res) => setTrendingCoins(() => res.data.coins));
	},[]);

	const scroller = useRef();


	return (
	<div className='bg-[#EFF2F5] min-h-screen w-full overflow-auto'>
		
		<Navbar/>

		
		{/* COLUMN 1 */}
		<div className='mt-20 px-10 py-1'>

			{"Cryptocurrencies >> Bitcoin"}

			<div className='grid grid-cols-1 sm:grid-cols-9 sm:gap-4'>
				<div className='col-span-6'>

					{/* Trading View Chart */}
					<OuterContainer bgColor={"bg-white"}>
						<div className='h-[500px]'>
							<TradingViewWidget coinName={coinName}/>
						</div>
					</OuterContainer>


					{/* Takeonomics */}
					<OuterContainer bgColor={"bg-white"}>
						<div className='text-xl font-medium'>{"Takeonomics"}</div>

						<div className="my-4 font-medium text-base">{"Initial Distribution"}</div>
						<img src={intialDistributionImage} alt="" />
						<div className="my-2 text-sm text-slate-800">{"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quam hic veniam perspiciatis magnam eligendi, cum modi? Officia temporibus hic soluta architecto excepturi. Ex hic, odit expedita, blanditiis labore eligendi laborum vel dolor deleniti non quis veritatis dolores molestiae minus est nam ut perferendis numquam aliquam dicta quam? Molestias, repellendus."}</div>
						
					</OuterContainer>


					{/* Team */}
					<OuterContainer bgColor={"bg-white"}>
						<div className='text-xl font-medium'>{"Team"}</div>
						<div className="my-2 text-sm text-slate-800">{"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos provident est minima ipsam necessitatibus similique saepe ab neque voluptatem sunt."}</div>

						{teamMembers.map(member => <TeamProfile key={member.id} name={member.name} designation={member.designation} imgSrc={member.imgSrc}/>)}
						
					</OuterContainer>


					{/* Sentiment */}
					<OuterContainer bgColor={"bg-white"}>

						<div className='text-xl font-medium'>{"Sentiment"}</div>
						<div className='flex items-center gap-1 h-4 my-4'>
							<div className="my-4 font-medium text-sm">{"Key Events"}</div>
							<svg className="h-full text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310.28 310.28" fill="#7D7E8D" stroke="#7D7E8D"> <g> <path d="M155.139,0C69.592,0,0,69.598,0,155.139c0,85.547,69.598,155.139,155.139,155.139 s155.139-69.592,155.139-155.139S240.686,0,155.139,0z M167.454,248.502h-24.363V114.48h24.363V248.502z M154.721,91.77 c-8.58,0-14.678-6.647-14.678-14.953c0-8.58,6.373-15.227,15.227-15.227c9.141,0,14.965,6.647,14.965,15.227 C170.497,85.123,164.411,91.77,154.721,91.77z" /> </g></svg>
						</div>

						<ScrollCards cardWidth={416}>
							{eventCards.map((card) => <EventCard key={card.id} card={card}/>)}
						</ScrollCards>
						
						
						<div className='flex items-center gap-1 h-4 my-4'>
							<div className="my-4 font-medium text-sm">{"Analyst Estimates"}</div>
							<svg className="h-full text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310.28 310.28" fill="#7D7E8D" stroke="#7D7E8D"> <g> <path d="M155.139,0C69.592,0,0,69.598,0,155.139c0,85.547,69.598,155.139,155.139,155.139 s155.139-69.592,155.139-155.139S240.686,0,155.139,0z M167.454,248.502h-24.363V114.48h24.363V248.502z M154.721,91.77 c-8.58,0-14.678-6.647-14.678-14.953c0-8.58,6.373-15.227,15.227-15.227c9.141,0,14.965,6.647,14.965,15.227 C170.497,85.123,164.411,91.77,154.721,91.77z" /> </g></svg>
						</div>

						<div className='flex gap-4'>
							<div className='flex justify-center items-center h-[7rem] w-[7rem] rounded-full bg-green-100 text-4xl text-green-600'>76%</div>
							<div className='flex gap-4 justify-center items-center text-slate-400'>
								
								<div className='flex flex-col gap-4'>
									<div>Buy</div>
									<div>Hold</div>
									<div>Sell</div>
								</div>

								<div className='flex flex-col gap-4'>
									<div className='flex items-center gap-4'>
										<div className='h-1 w-[18rem] bg-green-600'></div>
										<div>76%</div>
									</div>

									<div className='flex items-center gap-4'>
										<div className='h-1 w-[2rem] bg-slate-500'></div>
										<div>8%</div>
									</div>

									<div className='flex items-center gap-4'>
										<div className='h-1 w-[4rem] bg-red-500'></div>
										<div>16%</div>
									</div>
								</div>
							</div>
						</div>
						
					</OuterContainer>

					{/* About Bitcoin */}
					<OuterContainer bgColor={"bg-white"}>
						<div className='text-xl font-medium'>{"About Bitcoin"}</div>

						<div className="my-4 font-medium text-base">{"What is Bitcoin?"}</div>
						<div className="my-2 text-sm text-slate-800">{"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quam hic veniam perspiciatis magnam eligendi, cum modi? Officia temporibus hic soluta architecto excepturi. Ex hic, odit expedita, blanditiis labore eligendi laborum vel dolor deleniti non quis veritatis dolores molestiae minus est nam ut perferendis numquam aliquam dicta quam? Molestias, repellendus."}</div>
						
						<div className='my-4 h-[2px] w-full bg-slate-200'></div>

						<div className="my-2 font-medium text-base">{"Lorem ipsum dolor sit amet."}</div>
						<div className="my-2 text-sm text-slate-800">{"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt necessitatibus possimus voluptates nobis voluptatem cumque, saepe illum eos. Ipsa expedita mollitia saepe vero. Ipsa mollitia optio dolores ducimus saepe repellendus nulla est soluta dolorum odit voluptatibus quaerat, omnis et cum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt necessitatibus possimus voluptates nobis voluptatem cumque, saepe illum eos. Ipsa expedita mollitia saepe vero. Ipsa mollitia optio dolores ducimus saepe repellendus nulla est soluta dolorum odit voluptatibus quaerat, omnis et cum!"}</div>
						<div className="my-2 text-sm text-slate-800">{"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis molestias commodi consectetur dolore eveniet tempora nesciunt possimus soluta, sit laborum doloribus placeat pariatur alias, necessitatibus inventore esse accusamus rem neque modi error reiciendis! Esse aliquam facilis reprehenderit ut voluptas, earum dicta, dignissimos dolorem perspiciatis fuga, id eum consequatur asperiores incidunt."}</div>
						<div className="my-2 text-sm text-slate-800">{"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt necessitatibus possimus voluptates nobis voluptatem cumque, saepe illum eos. Ipsa expedita mollitia saepe vero. Ipsa mollitia optio dolores ducimus saepe repellendus nulla est soluta dolorum odit voluptatibus quaerat, omnis et cum!"}</div>

						<div className='my-4 h-[2px] w-full bg-slate-200'></div>

						<div className='text-xl font-medium'>{"Already Holding Bitcoin?"}</div>

						<div className='flex gap-4'>
							<GradientBgCard heading={"Calculate your Profits"} imgSrc={profile1} fromColor={"from-[#77ECA5]"} toColor={"to-[#105FAD]"}/>
							<GradientBgCard heading={"Calculate your tax liability"} imgSrc={profile3} fromColor={"from-[#FF9665]"} toColor={"to-[#F13D38]"}/>
						</div>

						<div className='my-4 h-[2px] w-full bg-slate-200'></div>
						<div className="my-2 text-sm text-slate-800">{"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quisquam laboriosam cum odio corrupti magnam iste exercitationem ea veritatis numquam temporibus iure voluptates quaerat, laborum dolorum consequatur libero! Quas, atque."}</div>
					</OuterContainer>

					

				</div>
				

				{/* COLUMN 2 */}
				<div className='col-span-3 w-[20rem]'>
					<OuterContainer bgColor={"bg-[#0053FF]"}>
						
						<div className='flex flex-col gap-4 items-center text-center'>
							<div className='text-white text-xl font-semibold px-4'>{"Get Started with KoinX for FREE"}</div>

							<div className='text-white'>{"With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports."}</div>

							<img src={bannerImage1} alt="" />
							<Button label={"Get Started for FREE"} type={"normal"}/>
						</div>
					</OuterContainer>

					<OuterContainer bgColor={"bg-white"}>

						<div className='text-xl font-medium'>{"Trending Coins (24h)"}</div>
						{trendingCoins.map(coin => <CoinHeader key={coin.item.id} coin={coin} label={"name"}/> )}

					</OuterContainer>
					
				</div>
			</div>
		</div>
		
		<div className='px-10 py-2 bg-white'>
			<div className='text-xl font-medium '>{"You May Also Like"}</div>
			
			<ScrollCards cardWidth={240}>
				{trendingCoins.map(coin => <MiniChart key={coin.item.id} coin={coin}/>)}
			</ScrollCards>
			<div className='text-xl font-medium '>{"Trending Coins"}</div>
			
			<ScrollCards cardWidth={240}>
				{trendingCoins.map(coin => <MiniChart key={coin.item.id} coin={coin}/>)}
			</ScrollCards>
		</div>
	</div>
  )
}

export default App
