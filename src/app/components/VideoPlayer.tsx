import { ShowDetails } from '@/types'

const VideoPlayer = ({ show }: { show: ShowDetails | undefined }) => {
	const trailerSrc = show?.videos?.results?.filter((item: any) => {
		return (
			item.type === 'Trailer' &&
			item.site === 'YouTube' &&
			item.official === true
		)
	})[0]

	if (!trailerSrc)
		return (
			<div className='flex items-center justify-center'>
				<p>No Video</p>
			</div>
		)

	return (
		<iframe
			width='100%'
			height='100%'
			src={`https://www.youtube.com/embed/${trailerSrc?.key}`}
			title='YouTube video player'
			frameBorder='0'
			allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
			allowFullScreen
		></iframe>
	)
}

export default VideoPlayer
