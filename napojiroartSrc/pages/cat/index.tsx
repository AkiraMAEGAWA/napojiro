import Cat from "../../cat/cat";
import SoCute from "../../cat/cute";
import Nyan from "../../cat/nyan";

import cxs from "cxs";

const CutyCat = () => {
  const flexStyle = cxs({
    display: "flex",
  });

  const imgSrcPath = "/akarui_cats.jpg";
  const audioSrcPath = "/nyan.m4a";
  const mimeType = "audio/aac";

  return (
    <div className={flexStyle}>
      <Cat imgSrcPath={imgSrcPath} />
      <div>
        <Nyan audioSrcPath={audioSrcPath} mimeType={mimeType} />
        <SoCute />
      </div>
    </div>
  );
};

export default CutyCat;
