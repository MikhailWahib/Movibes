const VideoPlayer = ({ show }: { show: any }) => {
	const trailerSrc = show.videos.results.filter((item: any) => {
		return (
			item.type === 'Trailer' &&
			item.site === 'YouTube' &&
			item.official === true
		)
	})[0]
	console.log(
		'🚀 ~ file: page.tsx:32 ~ trailerSrc ~ trailerSrc:',
		trailerSrc?.key
	)
	return (
		<div className='w-full h-[25rem] rounded-xl overflow-hidden'>
			<iframe
				width='100%'
				height='100%'
				src={`https://www.youtube.com/embed/${trailerSrc?.key}`}
				title='YouTube video player'
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				allowFullScreen
			></iframe>
		</div>
	)
}

export default VideoPlayer
