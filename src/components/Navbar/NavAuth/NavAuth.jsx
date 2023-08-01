import { AppLink, Avatar, Icon } from "@/components";
import { navList } from "@/utils/conts";
import { useState } from "react";
import cls from "./navauth.module.scss";

const NavAuth = ({ handleLogout, avatar, id }) => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <ul className={cls.navList}>
        {navList.map((item) => (
          <li key={item.id}>
            {item.to ? (
              <AppLink to={item.to}>
                <Icon type={item.iconType} />
              </AppLink>
            ) : (
              <Icon type={item.iconType} />
            )}
          </li>
        ))}
        <li onClick={() => setOpen(!open)}>
          <Avatar src={avatar} alt="Avatar" />
          {open && (
            <ul className={cls.dropdown}>
              <li>
                <AppLink to={`/profile/${id}`}>Профиль</AppLink>
              </li>
              <li onClick={handleLogout}>Выйти</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavAuth;
