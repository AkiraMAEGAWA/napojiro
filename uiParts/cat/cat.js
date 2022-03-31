import Image from "next/image"

const Cat = ({imgSrcPath}) => {
    return <>
        <Image 
          src={imgSrcPath}
          alt="o-jiro and naporitan"
          width={1024}
          height={1024}
        />
    </>
}

export default Cat;
