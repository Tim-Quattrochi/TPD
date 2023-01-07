import React from 'react'
import Pete from '../images/pete.jpg'
import Tim from '../images/realtim.jpg'
import Destiny from '../images/Destiny.jpg'
import Rick from '../images/rickastley.jpg'

export default function StaffPage(props) {

    
return (

    <div className="pl-44 h-screen overflow-scroll">   
    
    <h2 className='text-red-900 font-semibold pt-10  text-3xl text-center' > 
    Your Future Team </h2>

    <div className='flex flex-col'> 
    
                <div className="flex justify-center m-20">
                    <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                        <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" 
                        src={Tim} 
                        alt="" />
                        <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2"> Tim </h5>
                        <p className="text-gray-700 text-base mb-4">

                        "What's up doc? I'm the one and only wisecracking, carrot-munching bunny around. I may be small, but I've got brains, charm, and a whole lotta sass. When I'm not busy outwitting my enemies (looking at you, Elmer Fudd), you can find me chillin' in my cozy burrow, munching on my favorite snack (you guessed it, carrots). Just a warning: I've been known to pull a prank or two, so watch your back. But despite my mischievous side, I've got a heart of gold and I'm always ready for a good laugh. So if you're looking for a rabbit with a whole lotta personality, give me a hop!"

                        </p>
                        <p className="text-gray-600 text-xs"> Full Stack Developer </p>
                        </div>
                    </div>
                </div>  
                
                <div className="flex justify-center mb-20">
                    <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                        <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" 
                        src={Pete} 
                        alt="" />
                        <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2"> Pete </h5>
                        <p className="text-gray-700 text-base mb-4">

                        "Hey y'all! I'm the one and only rooster with a voice as big as my Southern charm. I may be a bit of a troublemaker, but I always mean well (most of the time). When I'm not busy crowing at the break of dawn or trying to outsmart that pesky Barnyard Dawg, you can find me relaxing on my porch with a tall glass of lemonade. Just a warning: I'm known to have strong opinions and a bit of a ego, but hey, can you blame me? I am pretty dang handsome. So if you're looking for some good ol' fashioned laughs and a heaping helping of Southern hospitality, give me a holler!"

                        </p>
                        <p className="text-gray-600 text-xs"> Full Stack Developer </p>
                        </div>
                    </div>
                </div>
                
                <div className="flex justify-center mb-20">
                    <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                        <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" 
                        src={Destiny} 
                        alt="" />
                        <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2"> Destiny </h5>
                        <p className="text-gray-700 text-base mb-4">

                        "Hello! I'm Tweety Bird, the cute and cuddly yellow canary with a sassy attitude. Don't let my adorable appearance fool you – I may be small, but I've got a whole lot of spunk. When I'm not busy evading the clutches of my arch-nemesis, Sylvester the Cat, you can find me singing my heart out and enjoying a nice, warm bath. Just a warning: I may be small, but I've got a big voice and I'm not afraid to use it. So if you're looking for some feathers, fun, and a whole lot of attitude, give me a tweet!"

                        </p>
                        <p className="text-gray-600 text-xs"> Full Stack Developer </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mb-20">
                    <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                        <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" 
                        src={Rick} 
                        alt="" />
                        <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2"> Rick </h5>
                        <p className="text-gray-700 text-base mb-4">

                        "Hey there! I'm Rick Astley, the one and only "King of Memes." You may know me from my hit song "Never Gonna Give You Up," which has taken the internet by storm (thanks to the power of the "rickroll"). When I'm not busy being the subject of endless memes and parodies, you can find me singing my heart out and enjoying a nice, cold pint. Just a warning: I've been known to bust out into impromptu performances of "Never Gonna Give You Up" at any given moment, so beware the power of the Rickroll. But despite my iconic status as the ultimate internet prank, I'm just a down-to-earth guy with a love for music and a good laugh. So if you're ready to get Rickrolled (or just want to enjoy some good tunes), give me a shout!"

                        </p>
                        <p className="text-gray-600 text-xs"> Professional Troll </p>
                        </div>
                    </div>
                </div>

    </div>
    
    </div>


    

)}




