import React from "react"

export default function HomeCardDisplay() {
    return (
        <div className="flex items-center justify-center bg-white overflow-hidden">
            <div className="grid lg:grid-cols-3 sm:grid-col-1 xl:gap-8 gap-5 m-5 sm:mx-10 ">
                
                {/*Card 1 */}
                <div className="flex ">
                    <div className="lg:max-w-md sm:max-w-full rounded-xl border-2 border-black-300 shadow-lg bg-white relative lg:pb-4 lg:px-3 lg:py-3">
                        <img className="w-full rounded-lg object-cover h-52" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1634&q=80" alt="Tooling"></img>
                        <div className="px-6 py-4">
                            <div className="font-extrabold text-gray-900 text-3xl mb-2">Tools Box</div>
                            <p className="text-gray-900 text-base">
                            Take a look at my most commonly used languages and tools that help get your projects off the ground. 
                            </p>
                        </div>
                        <div className="px-6 pt-2 pb-4">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-0">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-0">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-0">#winter</span>
                        </div>
                    </div>
                </div>

                {/*Card 2 */}
                <div className="flex">
                    <div className="lg:max-w-md sm:max-w-full rounded-xl border-2 border-black-300 shadow-lg bg-white relative lg:pb-4 lg:px-3 lg:py-3">
                        <img className="w-full rounded-lg object-cover h-52" src="https://images.unsplash.com/photo-1593285687836-443f2e992262?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="Sunset in the mountains"></img>
                        <div className="px-6 py-4">
                            <div className="font-extrabold text-gray-900 text-3xl mb-2">Experience</div>
                            <p className="text-gray-900 text-base">
                            View past companies and clients, and see what they have to say.
                            </p>
                        </div>
                        <div className="px-6 pt-2 pb-4">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-0">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-0">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-0">#winter</span>
                        </div>
                    </div>
                </div>

                {/*Card 3 */}
                <div className="flex ">
                    <div className="lg:max-w-md sm:max-w-full rounded-xl border-2 border-black-300 shadow-lg bg-white relative lg:pb-4 lg:px-3 lg:py-3">
                        <img className="w-full rounded-lg object-cover h-52" src="https://media.giphy.com/media/3oKIPs1EVbbNZYq7EA/giphy.gif" alt="Sunset in the mountains"></img>
                        <div className="px-6 py-4">
                            <div className="font-extrabold text-gray-900 text-3xl mb-2">Strategies developed</div>
                            <p className="text-gray-900 text-base">
                            Look into the different approaches used to overcome different challenges across a variety of projects. 
                            </p>
                        </div>
                        <div className="px-6 pt-2 pb-4">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-0">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-0">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-0">#winter</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

