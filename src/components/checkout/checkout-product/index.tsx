
const CheckoutProduct = ({ storedCart, subTotal }) => {
  return (
    <div>
      {storedCart?.map((product, index) => (
        <div
          key={index}
          className="relative w-full  backdrop-blur-md bg-stone-100 rounded p-1 mt-2"
        >
          {/* Product details */}
          <div className="flex justify-between items-center">
            <div className="flex items-center ">
              <div>
                <img
                  src={`${product?.image}`}
                  alt="product"
                  className="w-20 h-20 rounded-   md object-contain"
                />
              </div>

              <div className="ml-4">
                <p className="text-[15px] text-qblack">{product?.title}</p>
                <div className="flex space-x-1 items-center"></div>
                <p className="text-[15px] font-normal">
                  Quantity: {product?.quantity}
                </p>
              </div>
            </div>

            <div>
              <p className="text-[15px] font-normal">
                {product?.offer_price} $
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* pricing calculation */}
      <hr />
          <div>Total Price: {subTotal}</div>
    </div>
  );
};

export default CheckoutProduct;
