const Nyan = ({audioSrcPath, mimeType}) => {
    return <>
        <figcaption>にゃーん</figcaption>
        <audio
            controls
            src={audioSrcPath} type={mimeType}
        >
        </audio>
    </>
}

export default Nyan