const Nyan = ({ audioSrcPath, mimeType }) => {
  return (
    <>
      <figcaption>γ«γγΌγ</figcaption>
      <audio controls>
        <source src={audioSrcPath} type={mimeType}></source>
      </audio>
    </>
  );
};

export default Nyan;
