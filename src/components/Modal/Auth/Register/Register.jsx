import React from "react";
import cls from "./register.module.scss";
import { useDispatch } from "react-redux";
import { MODAL_VIEW } from "@/components/Navbar/Navbar";
import { AUTH_MODAL_TYPES } from "@/redux/types/authModalTypes";
import { Button, ButtonVariant, Form, Input } from "@/components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerUser } from "@/redux/actions/authAction";

const Register = ({ authModal }) => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Введите валидную почту")
      .required("Поле не может быть пустым"),
    username: yup.string().required("Поле не может быть пустым"),
    fullname: yup.string().required("Поле не может быть пустым"),
    password: yup
      .string()
      .required("Поле не может быть пустым")
      .oneOf([yup.ref("password")], "Пароли не совпадают"),
    cf_password: yup.string().required("Поле не может быть пустым"),
  });

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const onOpenLogin = () => {
    dispatch({
      type: AUTH_MODAL_TYPES.MODAL,
      payload: { ...authModal, view: MODAL_VIEW.LOGIN },
    });
  };

  const onSubmit = (data) => {
    dispatch(registerUser(data));
  };

  return (
    <div className={cls.register}>
      <h2 className={cls.title}>Вход или регистрация</h2>

      <Form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          value={watch("email")}
          placeholder="Ваша почта"
          required
          error={errors?.email}
          {...register("email")}
        />
        <Input
          value={watch("username")}
          placeholder="Ваше имя"
          required
          error={errors?.username}
          {...register("username")}
        />
        <Input
          value={watch("fullname")}
          placeholder="Ваш ник"
          required
          error={errors?.fullname}
          {...register("fullname")}
        />
        <Input
          type="password"
          value={watch("password")}
          placeholder="Пароль"
          required
          error={errors?.password}
          {...register("password")}
        />
        <Input
          type="password"
          value={watch("cf_password")}
          placeholder="Подтверждение пароля"
          required
          error={errors?.cf_password}
          {...register("cf_password")}
        />

        <p className={cls.text}>
          Нажимая на кнопку войти, на вашу почту будет отправлен код из 4
          символов
        </p>
        <Button className={cls.btn} fullWidth type="submit">
          Регистрация
        </Button>
      </Form>

      <div className={cls.registerFooter}>
        Есть аккаунт?
        <Button
          className={cls.btn}
          variant={ButtonVariant.CLEAR}
          onClick={onOpenLogin}
        >
          Войти
        </Button>
      </div>
    </div>
  );
};

export default Register;
