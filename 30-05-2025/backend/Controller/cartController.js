import Cart from "../Model/cartModel.js";

export const cartAdded = async (req, res) => {
  try {
    const userId = req.user._id;
    const { product, quantity } = req.body;
    console.log(product, quantity,userId);
    let prevCart = await Cart.findOne({ product: product, user: userId });
    console.log(prevCart, "first Prev");
    if (prevCart!=null) {
      prevCart.quantity += quantity;
    } else {
      prevCart = new Cart({
        user: userId,
        product: product,
        quantity: quantity,
        cartDate: new Date(),
      });
    }
 console.log(prevCart,"Prev SEcond")
    await prevCart.save();
    return res
      .status(201)
      .json({ message: "Product added to cart successfully.", cart: prevCart });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error.", error: error.message });
  }
};

export const getMyCarts = async (req, res) => {
  try {
    const userId = req.user._id;
    const carts = await Cart.find({ user: userId }).populate("product").select("-user");

    return res.status(200).send({ message: "get Carts Successfully", carts });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error.", error: error.message });
  }
};

export const updateCartsQuantity = async (req, res) => {
  try {
    const userId = req.user._id;
    const { id } = req.params;
    const { quantity } = req.body;
    const cart = await Cart.findByIdAndUpdate(
      { _id: id, user: userId },
      { quantity: quantity },
      { new: true }
    );
    if (!cart) {
      return res
        .status(404)
        .json({ message: "Cart not found or unauthorized." });
    }

    return res.status(201).send({ message: "Cart Updated", cart });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error.", error: error.message });
  }
};

export const deleteCarts = async (req, res) => {
  try {
    const userId = req.user._id;
    const { id } = req.params;
    const deleteCart = await Cart.findOneAndDelete({ product: id, user: userId });
    if (!deleteCart) {
      return res
        .status(404)
        .json({ message: "Cart not found or unauthorized." });
    }
    return res.status(200).json({ message: "Cart deleted", deleteCart });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error.", error: error.message });
  }
};
