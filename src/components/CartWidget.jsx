import cartwidget from "../assets/cartwidget.jpg"
export const CartWidget = () => {
  return (
    <div id="cart_widget">
      <img src={cartwidget} alt="cart" width={60}/>
      <span>66</span>
    </div>
  );
};
