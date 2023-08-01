import React from "react";

import cls from "./navbar.module.scss";
import Logo from "../../assets/Logo.png";
import NavSearch from "./NavSearch/NavSearch";
import { Button, ButtonVariant, Modal, Login, Register } from "@/components";
import { useDispatch, useSelector } from "react-redux";
import { AUTH_MODAL_TYPES } from "@/redux/types/authModalTypes";
import { logout } from "@/redux/actions/authAction";
import NavAuth from "./NavAuth/NavAuth";

export const MODAL_VIEW = {
  LOGIN: "login",
  REGISTER: "register",
  FORGOT: "forgot",
};

const Navbar = () => {
  const dispatch = useDispatch();

  const authModal = useSelector((state) => state.authModal);
  const { token: isAuth, user } = useSelector((state) => state.auth);

  const onOpen = () => {
    dispatch({
      type: AUTH_MODAL_TYPES.MODAL,
      payload: { ...authModal, open: true },
    });
  };

  const onClose = () => {
    dispatch({
      type: AUTH_MODAL_TYPES.MODAL,
      payload: { ...authModal, open: false },
    });
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={cls.navbar}>
      <div className="container">
        <div className={cls.wrap}>
          <img src={Logo} alt="Logo" />

          <NavSearch />

          {isAuth ? (
            <NavAuth
              handleLogout={handleLogout}
              avatar={user.avatar}
              id={user._id}
            />
          ) : (
            <Button variant={ButtonVariant.OUTLINE} onClick={onOpen}>
              Войти
            </Button>
          )}
        </div>
      </div>

      <Modal open={authModal.open} onClose={onClose}>
        {authModal.view === MODAL_VIEW.LOGIN && <Login authModal={authModal} />}
        {authModal.view === MODAL_VIEW.REGISTER && (
          <Register authModal={authModal} />
        )}
      </Modal>
    </div>
  );
};

export default Navbar;
