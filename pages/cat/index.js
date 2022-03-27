import Cat from "./cat"
import Nyan from "./nyan"

const CutyCat = () => {

    const imgSrcPath = "/akarui_cats.jpg"
    const audioSrcPath = "/nyan.m4a"
    const mimeType = "audio/aac"

    return <div>
        <Cat imgSrcPath={imgSrcPath} />
        <Nyan audioSrcPath={audioSrcPath} mimeType={mimeType} />
    </div>
}

export default CutyCat