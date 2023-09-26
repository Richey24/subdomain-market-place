import propTypes, { InferProps } from "prop-types";
import { BsCheckLg } from "react-icons/bs";

const reportModalProps = {
  title: propTypes.string.isRequired,
  description: propTypes.string,
  usage: propTypes.arrayOf(propTypes.string.isRequired),
  isPrimary: propTypes.bool,
  tag: propTypes.string,
  saving: propTypes.string,
  isMain: propTypes.bool,
  price: propTypes.string.isRequired,
  priceTagline: propTypes.string.isRequired,
};

function PricingCard({
  title,
  description,
  priceTagline,
  usage,
  tag,
  price,
  isMain,
  saving,
  isPrimary,
}: InferProps<typeof reportModalProps>) {
  return (
    <div className={`relative   border-black pricingCard h-full md:h-[50rem]`}>
      {tag && (
        <button
          className={`"absolute top-0 left-2/4 -translate-y-2/4 translate-x-2/4 px-6 py-2 mb-1 font-semibold rounded-md ${
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
          <div className="mb-3 text-purple-50 ">{description}</div>
        </div>
        <div className="mx-auto w-fit mb-6">
          <button
            className="px-10 py-3  font-semibold mx-auto mb-4"
            color="primary"
          >
            Add to Cart
          </button>
          {saving && <p className="underline mb-6">{saving}</p>}
        </div>
        <div className="text-center text-2xl font-semibold">{price}</div>
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
