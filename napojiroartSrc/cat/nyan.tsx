const Nyan = ({ audioSrcPath, mimeType }) => {
  return (
    <>
      <figcaption>にゃーん</figcaption>
      <audio controls>
        <source src={audioSrcPath} type={mimeType}></source>
      </audio>
    </>
  );
};

export default Nyan;
