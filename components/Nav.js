import Link from "next/link";
import NavStyles from "./styles/NavStyles";
import { useUser } from "./User";
import { SignOut } from "./SignOut";
import { useCart } from "../lib/CartState";
export default function Nav() {
  const user = useUser();
  const data = useCart();

  return (
    <NavStyles>
      <Link href="/products">Products</Link>
      {user && (
        <>
          <Link href="/sell">Sell</Link>
          <Link href="/orders">Orders</Link>
          <Link href="/account">Account</Link>
          <SignOut />

          {data && (
            <button type="button" onClick={data.openCart}>
              My Cart
            </button>
          )}
        </>
      )}
      {!user && (
        <>
          <Link href="/signin">Sign In</Link>
        </>
      )}
    </NavStyles>
  );
}
