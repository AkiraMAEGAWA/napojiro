import Cat from "../../components/cat/cat";
import SoCute from "../../components/cat/cute";
import Nyan from "../../components/cat/nyan";

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
