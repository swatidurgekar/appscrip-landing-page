import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>LOGO</div>
        <div className={styles.navitems}>
          <div className={styles.navtabs}>
            <div>Home</div>
            <div>About Us</div>
            <div>Our Blog</div>
            <div>Support</div>
            <div>Affiliate</div>
            <div>Programs</div>
          </div>
          <div className={styles.loginsignup}>
            <div>Login</div>
            <div>Sign Up</div>
          </div>
        </div>
      </div>
      {/* <div
        style={{
          height: "3.5em",
          width: "-webkit-fill-available",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#000",
          color: "#fff",
          backgroundImage: `url("/assets/navbar.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div> */}
    </>
  );
};

export default Navbar;
