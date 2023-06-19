import "./style.css";

import Instagram from "../../img/Instagram.webp";
import Facebook from "../../img/Facebook.webp";

const icones = [
  {
    imagem: Instagram,
    url: "https://www.instagram.com/agrogalope/?igshid=YmMyMTA2M2Y%3D",
    alt: "Logo Instagram",
  },
  {
    imagem: Facebook,
    url: "https://www.facebook.com/agrogalope/",
    alt: "Logo Facebook",
  },
];

function IconesHeader() {
  return (
    <ul className="icones">
      {icones.map((icone) => (
        <li className="icone">
          <a href={icone.url}>
            <img src={icone.imagem} alt={icone.alt} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default IconesHeader;
