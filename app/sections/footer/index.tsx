import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black flex flex-col pt-20 pb-10">
      <div>
        <ul className="flex gap-6">
          <li>About</li>
          <li>Why Us </li>
          <li>Platform</li>
          <li>Pricing</li>
          <li>Contacts</li>
        </ul>
        <h3 className="text-white text-3xl">hello@ramos.com</h3>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex gap-3">
          <div>
            <p>Warrensville Heights</p>
            <p>1418 Vineyard Drive, NC</p>
            <p>44128</p>
          </div>
          <div>
            <p>Warrensville Heights</p>
            <p>1418 Vineyard Drive, NC</p>
            <p>44128</p>
          </div>
        </div>
        <ul className="flex flex-col gap-3">
          <li>Linkedin</li>
          <li>Instagram</li>
          <li>Facebook</li>
        </ul>
      </div>
      <div>
        <h2 className="text-4xl">Ramos</h2>
        <p>Privacy policy</p>
        <p>License agreement</p>
        <Image alt="bar-code" src="/images/ramos-logo.png" width={150} height={0} />
      </div>
    </footer>
  );
};
