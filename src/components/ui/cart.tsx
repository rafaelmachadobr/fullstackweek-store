import { CartContext } from "@/providers/cart";
import { ShoppingCartIcon } from "lucide-react";
import { useContext } from "react";
import { Badge } from "./badge";

const Cart = () => {
  const { products } = useContext(CartContext);

  return (
    <div>
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <ShoppingCartIcon size={16} />
        Catálogo
      </Badge>

      {/* RENDERIZAR OS PRODUTOS */}
      {products.map((product) => (
        <h1 key={product.id}>{product.name}</h1>
      ))}
    </div>
  );
};

export default Cart;
