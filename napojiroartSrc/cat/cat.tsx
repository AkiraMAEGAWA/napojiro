import Image from "next/image";
import cxs from "cxs";

const Cat = ({ imgSrcPath }) => {
  const imageStyle = cxs({
    borderRadius: "2px",
  });

  return (
    <>
      <Image
        src={imgSrcPath}
        alt="o-jiro and naporitan"
        width={512}
        height={512}
        className={imageStyle}
      />
    </>
  );
};

export default Cat;
