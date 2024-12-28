const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="flex flex-col px-10 py-8 text-white md:justify-between md:px-28 md:flex-row">
        <p className="pb-5 text-center md:pb-0 md:text-start">{`©2024 Memberspace, Inc - All Rights Reserved`}</p>
        <div className="flex justify-center gap-14 md:justify-end">
          <p>Terms of use</p>
          <p>Privacy policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
