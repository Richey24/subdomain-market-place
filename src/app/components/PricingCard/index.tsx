import Link from "next/link";
import propTypes, { InferProps } from "prop-types";
import { BsCheckLg } from "react-icons/bs";

const reportModalProps = {
  type: propTypes.oneOf(["ecommerce", "service"]),
  title: propTypes.string.isRequired,
  description: propTypes.string,
  usage: propTypes.arrayOf(propTypes.string.isRequired),
  isPrimary: propTypes.bool,
  tag: propTypes.string,
  saving: propTypes.string,
  offer: propTypes.string,
  isMain: propTypes.bool,
  plan: propTypes.string,
  price: propTypes.string.isRequired,
  priceTagline: propTypes.string.isRequired,
};

function PricingCard({
  title,
  type,
  description,
  priceTagline,
  usage,
  tag,
  price,
  isMain,
  plan,
  saving,
  offer,
  isPrimary,
}: InferProps<typeof reportModalProps>) {
  return (
    <div
      className={`relative   border-black pricingCard h-full md:h-[54rem] pt-6`}
    >
      {tag && (
        <button
          className={`absolute shadow-lg top-0 left-2/4 -translate-y-2/4 -translate-x-2/4 px-6 py-2 mb-1 font-semibold rounded-md ${
            isMain
              ? "bg-purple-100 text-purple-600 "
              : "bg-amber-100 text-amber-600 "
          }`}
          color="primary"
        >
          {tag}
        </button>
      )}
      <div className="p-5 pt-2">
        <div
          className={` text-white p-3 mt-2 rounded-md ${
            isMain ? "bg-purple-600" : "bg-amber-600"
          }`}
        >
          <div
            className={`w-auto mb-6 font-bold text-center text-5xl text-purple-50`}
          >
            {title}
          </div>
          <div className="mb-3 text-purple-50 text-center">{description}</div>
        </div>
        <div className="mx-auto w-fit mb-6">
          <Link href={`https://dashboard.ishop.black/register?type=${type}&plan=${plan}`}>
            <button
              className={`mt-4 text-white px-10 py-3  font-semibold mx-auto mb-4 rounded-md ${
                isMain ? "bg-purple-600" : "bg-amber-600"
              }`}
              color="primary"
            >
              Add to Cart
            </button>
          </Link>
          {saving && <p className="underline mb-6">{saving}</p>}
        </div>
        <div className="text-center bg-gray-200 rounded-md font-medium w-fit mx-auto px-2 py-1 mb-3">
          {offer || "First Month Offer*"}
        </div>
        <div className="text-center text-2xl md:text-4xl font-bold">
          {price}
        </div>
        <div className="text-center">{priceTagline}</div>
        <ul className={`list-inside${isPrimary ? "text-purple-600" : ""}`}>
          {usage?.map((use) => {
            return (
              <li
                className="flex items-center border-b py-4 mb-6"
                key={`${title}-${use}`}
              >
                <span className="text-2xl mr-6">
                  <BsCheckLg />
                </span>
                <p className="mb-0">{use}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default PricingCard;
