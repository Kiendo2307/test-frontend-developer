import QnAItem from "./QnAItem";

const QnA = () => {
  return (
    <div
      className="relative h-[928px] w-full flex flex-col justify-center bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url('/assets/images/bg_rock_no_shadow.png')`,
      }}
    >
        <QnAItem/>
    </div>
  );
};

export default QnA;
