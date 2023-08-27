import { ShowDetails } from '@/types'

const VideoPlayer = ({
	show,
	trailerSrc,
}: {
	show: ShowDetails | undefined
	trailerSrc: string
}) => {
	return (
		<iframe
			width='100%'
			height='100%'
			src={`https://www.youtube.com/embed/${trailerSrc}`}
			title='YouTube video player'
			frameBorder='0'
			allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
			allowFullScreen
		></iframe>
	)
}

export default VideoPlayer
