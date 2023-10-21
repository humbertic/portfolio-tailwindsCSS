import React from 'react'
import WorkImage from '../assets/projects/workImg.jpeg'
import realState from '../assets/projects/realestate.jpg'
import Tenzies from "../assets/projects/Tenzies.png"
import Quiz from "../assets/projects/Quiz.png"
import Meme from "../assets/projects/Meme-generator.png"

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f] mt-16'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-b-pink-600'>Work</p>
                <p className='py-6'>// Check out some of my recent work</p>
            </div>
            {/* Container */}

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Grid Item */}
                <div style={{backgroundImage:`url(${Tenzies})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl text-white font-bold text-wider'>
                            React JS Aplication

                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://my-tenzies-game-react-app.netlify.app" target='blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/humbertic/tenzies" target='blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${Quiz})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl text-white font-bold text-wider'>
                            React JS Aplication

                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://my-site-quizzical.netlify.app" target='blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${Meme})`,}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* Hover effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl text-white font-bold text-wider'>
                            React JS Aplication

                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://my-meme-react-app.netlify.app/" target='blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/humbertic/meme-generator" target='blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
        </div>
  )
}

export default Work