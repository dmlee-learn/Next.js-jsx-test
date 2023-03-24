import NavBar from "/component/NavBar";

export default function myApp({ Component, pageProps}) {
  return (
    <div>
      <NavBar/>
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color:white;
        }
      `}</style>
    </div>
  );
}