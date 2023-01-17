import LogoText from '../../assets/logo.svg'
import ImageMain from '../../assets/image1.jpg'
import ImageSecond from '../../assets/image2.jpg'
import './Header.scss';

export function Header() {
  return (
    <div className="header" style={{backgroundImage: `url(${ImageMain})`}}>
      <div className="header-cover"></div>
      <div className="header-logo" style={{backgroundImage: `url(${LogoText})`}}></div>
      <div className="header-bolb">
        <div className="header-bolb-container">
          <div className="big-bolb" style={{backgroundImage: `url(${ImageSecond})`}}></div>
          <div className="big-bolb-decorator"></div>
          <div className="small-bolb"></div>
        </div>
      </div>
      <div className="header-text">
        <div className="header-text-container">

          <p className="sub-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
          </p>
          <div className="header-text-container-rect">
            <p className="main-text">
              We are pleased to quote you the following products:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

