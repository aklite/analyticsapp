import React, { useState } from 'react'
import "../components/utils.css"
import "./home.css"
import { useAuth0 } from "@auth0/auth0-react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
// import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowUp,AiOutlineArrowDown } from "react-icons/ai"
const Home = () => {

    const { user, isAuthenticated } = useAuth0();
    const [activeTab, setActiveTab] = useState(0);

    const { loginWithRedirect } = useAuth0();
    const dataMonthly = [{ name: 'December 2022', views: 400, pv: 2400, amt: 2400 },
    { name: 'January 2023', views: 400, pv: 2400, amt: 2400 },
    { name: 'February 2023', views: 100, pv: 1000, amt: 7000 }
        ,
    { name: 'March 2023', views: 800, pv: 1000, amt: 7000 }
    ];
    const dataYearly = [{ name: '2020', views: 900, pv: 1400, amt: 2400 },
    { name: '2021', views: 1900, pv: 400, amt: 2400 },
    { name: '2022', views: 700, pv: 1000, amt: 7000 }
        ,
    { name: '2023', views: 500, pv: 1000, amt: 7000 }
    ];
    const dataDaily = [{ name: '1st March', views: 1300, pv: 1400, amt: 2400 },
    { name: '2nd March', views: 1000, pv: 400, amt: 2400 },
    { name: '3rd March', views: 1700, pv: 1900, amt: 7000 }
        ,
    { name: '4th March', views: 500, pv: 1000, amt: 7000 }
    ];
    const handleClick = (index) => {
        setActiveTab(index)
    }
    if (!isAuthenticated) {

        return <div className='flex mt-5 max-w-5xl mx-auto items-center wrap px-4'>
            <div className='flex-start'>
                <h1>DATA ANALYTICS</h1>
                <p className='font-semibold'>One Stop solution for Social media Analaytics Dashboard
                    Understand how your posts are performing.
                    Our all Services are Free!
                </p>
                <button
                    className='bg-purple-800 text-white px-5 py-3 '
                    onClick={() => loginWithRedirect()}
                >
                    Get Started Now
                </button>
            </div>
            <div>
                <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2020/02/10-great-google-analytics-alternatives-5e4175671fa6a.png"
                    className='img'
                    alt="" />
            </div>

        </div>
    } 
    
    return (
        <div className='max-w-7xl pl-4  mx-auto pt-4 mt-4'>
            <div className='border'>
                <div className='font-extraBold text-lg'>
                    Instagram
                </div>
                <p className='text-2xl'>
                    Post Insights Dashboard
                </p>
            </div>
           {
            user && <h2>
                Hello {user.nickname}!
            </h2>
           }
            <div className='flex gap-5'>
                <div>
                    <ul className="tab-list flex">
                        <li className={activeTab === 0 ? 'active-tab' : ''} onClick={() => handleClick(0)}>Post Enagement Monthly</li>
                        <li className={activeTab === 1 ? 'active-tab' : ''} onClick={() => handleClick(1)}>Post Enagement Yearly</li>
                        <li className={activeTab === 2 ? 'active-tab' : ''} onClick={() => handleClick(2)}>Post Engagement Daily</li>
                    </ul>
                    <LineChart width={600} height={300} data={activeTab === 0 ? dataMonthly : activeTab === 1 ? dataYearly : dataDaily} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="views" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </div>
                <div>
                    <div>
                    <div className='flex gap-5 custom-wrap'>
                        <div className='border-gray py-2 px-3 mt-5 flex flex-col items-center align-center flex-1'>
                            <p className='font-semibold'> Post Published:Februrary 2023</p>
                            <div className='text-green-400'>4 <AiOutlineArrowUp /></div>
                        </div>
                        <div className='border-gray py-2 px-3 mt-5 flex flex-col items-center align-center flex-1'>
                            <p className='font-semibold'> Avg Engagement Duration:Feb 2023</p>
                            <div className='text-red-400'>0.85 <AiOutlineArrowDown /></div>
                        </div>
                    </div>
                    </div>
                    <div>
                    <div className='flex gap-5 custom-wrap'>
                        <div className='border-gray py-2 px-3 mt-5 flex flex-col items-center align-center flex-1'>
                            <p className='font-semibold'> Profile Clicks:Februrary 2023</p>
                            <div className='text-green-400'>1023 <AiOutlineArrowUp /></div>
                        </div>
                        <div className='border-gray py-2 px-3 mt-5 flex flex-col items-center align-center flex-1'>
                            <p className='font-semibold'> Followers:Feb 2023</p>
                            <div className='text-green-400'>114 <AiOutlineArrowUp /></div>
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Home