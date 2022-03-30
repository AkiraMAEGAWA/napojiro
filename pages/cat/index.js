import Cat from "./cat"
import SoCute from "./cute"
import Nyan from "./nyan"

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