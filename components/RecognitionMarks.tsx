import Image from "next/image";

type RecognitionMarksProps = {
  presenterLogo: string;
  presenterName: string;
};

export default function RecognitionMarks({
  presenterLogo,
  presenterName,
}: RecognitionMarksProps) {
  return (
    <div
      aria-label={`${presenterName} presented this recognition to Paboya Group`}
      className="recognition-marks"
      role="group"
    >
      <div className="recognition-mark recognition-mark--presenter">
        <span className="recognition-mark__label">Presented by</span>
        <span className="recognition-mark__logo recognition-mark__logo--presenter">
          <Image
            alt={`${presenterName} logo`}
            fill
            sizes="(max-width: 640px) 38vw, 150px"
            src={presenterLogo}
            unoptimized
          />
        </span>
      </div>
      <div className="recognition-mark recognition-mark--recipient">
        <span className="recognition-mark__label">Recognized organization</span>
        <span className="recognition-mark__logo recognition-mark__logo--recipient">
          <Image
            alt="Paboya Group logo"
            fill
            sizes="(max-width: 640px) 38vw, 150px"
            src="/images/logos/paboya-group.png"
            unoptimized
          />
        </span>
      </div>
    </div>
  );
}
