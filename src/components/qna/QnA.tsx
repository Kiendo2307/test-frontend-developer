import QnAItem from "./QnAItem";

const QnA = () => {
  return (
    <div
      className="relative h-[1000px] w-full flex flex-col justify-center bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url('/assets/images/bg_direct.png')`,
        marginTop:"-100px"
      }}
    >
       <div className="absolute inset-0 bg-black opacity-50 z-0" />
       <div className="relative z-10">
        <QnAItem/>
       </div>
    </div>
  );
};

export default QnA;
