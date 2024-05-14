import { IoFastFoodOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";

const FeatureSection = () => {
  return (
    <section className="bg-[#212121] w-10/12 mx-auto rounded-xl p-10">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 border border-[#FBB200] rounded-lg shadow p-4 md:p-6 text-center">
        <div className="flex flex-wrap flex-col items-center justify-center px-1 md:px-6">
          <IoFastFoodOutline className="text-5xl text-[#FBB200]" />

          <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-300">
            Super Quality Food
          </h1>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Fresh, healthy ingredients for flavorful dishes that nourish your
            body and delight your taste.
          </p>
        </div>

        <div className="flex flex-wrap flex-col items-center justify-center px-6">
          <TbTruckDelivery className="text-5xl text-[#FBB200]" />

          <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-300">
            QUICK FAST DELIVERY
          </h1>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Swift service ensures your order arrives within 30 minutes, so you
            can enjoy promptly.
          </p>
        </div>

        <div className="flex flex-wrap flex-col items-center justify-center px-6">
          <IoFastFoodOutline className="text-5xl text-[#FBB200]" />

          <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-300">
            100% FRESH FOODS
          </h1>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Organic ingredients only, guaranteeing additive-free, natural
            goodness in every dish.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
