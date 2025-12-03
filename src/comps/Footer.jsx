import React from "react";

const Footer = () => {
  return (
    <footer className=" flex justify-between w-full h-full">
      <div className="flex  items-center justify-center pl-5 gap-4  ">
        <a
          href="https://www.youtube.com/channel/UC3mlp-KW6mSDrsfsp8OOlIQ"
          target="_blank"
        >
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png"
            alt="youtube"
          />
        </a>

        <div className="h-12 w-12 ">
          <a
            href="https://www.facebook.com/fundet?mibextid=LQQJ4d"
            target="_blank"
          >
            <img
              width="50"
              height="20"
              src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png"
            />
          </a>
        </div>
        <div className="h-10 w-10">
          <a
            href="https://www.instagram.com/funvalinternacional/?igshid=MzRlODBiNWFlZA%3D%3D"
            target="_blank"
          >
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
              alt="instagram"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-white pr-10">
        <h2 className="font-medium tracking-widest text-2xl mb-3 ">
          Quiénes somos
        </h2>
        <p className="mb-1 w-100 font-medium">
          FUNVAL ofrece soluciones confiables e innovadoras, generando valor y
          confianza para sus clientes.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
