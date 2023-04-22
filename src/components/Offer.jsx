import { Link } from "react-router-dom";

function Offer({ offerText, offerPrice, offerTime, offerLink }) {
  return (
    <div className="relative flex justify-center px-3 sm:px-5 py-3.5 text-sm text-center bg-slate-900 overflow-hidden z-30">
      {" "}
      <svg
        className="absolute top-0"
        aria-hidden="true"
        width="1148"
        height="248"
      >
        <defs>
          <filter
            x="-76.9%"
            y="-76.9%"
            width="253.8%"
            height="253.8%"
            filterUnits="objectBoundingBox"
            id="top-a"
          >
            <feGaussianBlur
              stdDeviation="50"
              in="SourceGraphic"
            ></feGaussianBlur>
          </filter>
          <filter
            x="-76.9%"
            y="-76.9%"
            width="253.8%"
            height="253.8%"
            filterUnits="objectBoundingBox"
            id="top-b"
          >
            <feGaussianBlur
              stdDeviation="50"
              in="SourceGraphic"
            ></feGaussianBlur>
          </filter>
        </defs>
        <g transform="translate(0 -128)" fill="none" fillRule="evenodd">
          <circle
            fill="#6366F1"
            opacity=".48"
            filter="url(#top-a)"
            cx="931.501"
            cy="97.501"
            r="97.501"
          ></circle>
          <circle
            fillOpacity=".48"
            fill="#6366F1"
            filter="url(#top-b)"
            cx="209.501"
            cy="166.501"
            r="97.501"
          ></circle>
        </g>
      </svg>{" "}
      <Link
        to={offerLink}
        className="relative text-white font-medium outline-none"
      >
        ✨ {offerText} <span className="text-green-500">{offerPrice}</span>.{" "}
        {offerTime} ✨
      </Link>
    </div>
  );
}

export default Offer;
