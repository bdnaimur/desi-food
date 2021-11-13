import React from 'react';
import { ImClock, ImPhone } from 'react-icons/im';
import { RiChatSmile2Fill } from 'react-icons/ri';
import styles from '../../styles/Topbar.module.css';
const Topbar = () => {
    return (
        <div className={styles.topbar_background}>
            <div className="container">
          <div className="row">
            <div className="d-flex justify-content-between pt-2">
              <div className={`${styles.letf_topbar}`}>
                <div className="">
                  <span className={styles.icon_circle}><RiChatSmile2Fill className={`${styles.svg_color} px-1`} /></span>
                  <span className={styles.icon_circle}><ImPhone className={`${styles.svg_color} px-1`} /></span>
                  <ImClock className={`${styles.svg_color} px-1`} />
                  <span className={styles.topbar_text}>Mon-Sun: 1300-2200 h</span>
                </div>
              </div>
              <div className={`${styles.right_topbar}`}>
                <select className="topbar_select" name="lang" id={styles.lang}>
                  <option value="arabia">AR</option>
                  <option value="english" selected>EN</option>
                  <option value="spain">ES</option>
                  <option value="franch">FR</option>
                  <option value="greek">GU</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Topbar;