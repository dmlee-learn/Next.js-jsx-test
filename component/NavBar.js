import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css"

//<a style={{color: router.pathname === "/" ? "red": "blue"}}>home</a>
//<a className={router.pathname === "/" ? styles.active: ""}>home</a>
export default function NavBar(){
  const router = useRouter();
  return(
    <nav>
      <Link href="/">
        <a className={`${styles.link} ${router.pathname === "/" ? styles.active: ""}`}>home</a>
      </Link>
      <Link href="/about">
        <a className={[
          styles.link,
          router.pathname === "/about" ? styles.active: "",
          ].join(" ")}>about</a>
      </Link>
      <Link href="/jsx">
        <a className={router.pathname === "/jsx" ? "acti": ""}>jsx</a>        
      </Link>
      <style jsx>
        {`
          .a {
            color:white;
            text-decoration: none;
          }
          
          .acti {
            color:yellow;
          }
        `}
      </style>
    </nav>
  );
}