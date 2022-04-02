import Image from "next/image";

const SoCute = () => {
  const clickHandler = async () => {
    const localGoogleHomeNotifier = `${process.env.NEXT_PUBLIC_LOCAL_SERVER_HOST}/nyaon`;
    try {
      const _ = await fetch(localGoogleHomeNotifier, {
        method: "POST",
        cache: "no-cache",
      });
    } catch {
      console.log("maybe CORS error, but dont worry");
    }
  };

  return (
    <>
      <button onClick={clickHandler}>かわいいにゃー！</button>
      <Image
        src="/cat-puni-hand.jpg"
        alt="肉球のアイコン"
        width={16}
        height={16}
      ></Image>
    </>
  );
};

export default SoCute;
