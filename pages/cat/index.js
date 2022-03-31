import Cat from "../../uiParts/cat/cat"
import SoCute from "../../uiParts/cat/cute"
import Nyan from "../../uiParts/cat/nyan"

const CutyCat = () => {

    const imgSrcPath = "/akarui_cats.jpg"
    const audioSrcPath = "/nyan.m4a"
    const mimeType = "audio/aac"

    return <div>
        <Cat imgSrcPath={imgSrcPath} />
        <Nyan audioSrcPath={audioSrcPath} mimeType={mimeType} />
        <SoCute />
    </div>
}

export default CutyCat