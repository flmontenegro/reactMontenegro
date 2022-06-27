import React from 'react' 

export default function Item ({id, title, pictureUrl}) { 

  return ( 
  <div className="ItemListContainer flex grid-cols-3 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 2xl:w-1/4 p-4 flex-none">  
  <div className=" m-5  max-w-sm bg-grey rounded-lg border border-gray-200 shadow-md dark:border-gray-900 bg-stone-400/20"> 
  <img className="" src={pictureUrl} alt=""/> 
  <div className="p-5"> 
  <link href="perfumes.html"><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{title} - {id}</h5> </link> 
  <link href="" className=" inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-indigo-800 dark:hover:bg-green-500 dark:focus:ring-blue-800"> VER MAS
</link>
  </div>  
  </div> 
  </div> 
) 

} 