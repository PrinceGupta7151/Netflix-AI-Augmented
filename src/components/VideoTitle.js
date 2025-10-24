

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' absolute top-0 left-0 h-full
        flex flex-col justify-center 
        px-4 md:px-12 
        text-white 
        bg-gradient-to-r from-black via-black/70 to-transparent
    '>
        <h1 className='text-2xl md:text-4xl font-bold max-w-sm drop-shadow-lg'>{title}</h1>
        <p className='py-3 text-xs md:text-sm max-w-xs leading-relaxed drop-shadow-md'>{overview}</p>
        <div className="flex gap-2 mt-2">
            <button className='bg-white text-black text-xs md:text-sm px-4 md:px-6 py-1.5 rounded-md font-semibold hover:bg-opacity-80 transition'> ▶Play</button>
            <button className='bg-gray-800 text-white text-xs md:text-sm px-4 md:px-6 py-1.5 rounded-md bg-opacity-70 font-semibold hover:bg-opacity-90 transition'>More Info</button>
        </div>
    </div>
  ) 
}

export default VideoTitle