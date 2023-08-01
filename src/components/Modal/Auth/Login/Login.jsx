import React from "react";
import cls from "./login.module.scss";
import { useDispatch } from "react-redux";
import { Button, ButtonVariant, Input, Form } from "@/components";
import { AUTH_MODAL_TYPES } from "@/redux/types/authModalTypes";
import { MODAL_VIEW } from "@/components/Navbar/Navbar";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "@/redux/actions/authAction";

const Login = ({ authModal }) => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Введите валидную почту")
      .required("Поле не может быть пустым"),
    password: yup
      .string()
      .required("Поле не может быть пустым")
      .min(6, "Минимальное количество символов (6)"),
  });

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();

  const onOpenRegister = () => {
    dispatch({
      type: AUTH_MODAL_TYPES.MODAL,
      payload: { ...authModal, view: MODAL_VIEW.REGISTER },
    });
  };

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  return (
    <div className={cls.login}>
      <h1 className={cls.title}>Вход или регистрация</h1>
      <Form onSubmit={handleSubmit(onSubmit)} className={cls.form}>
        <Input
          value={watch("email")}
          placeholder={"email"}
          required
          error={errors?.email}
          {...register("email")}
        />
        <Input
          value={watch("password")}
          type="password"
          placeholder={"Password"}
          required
          error={errors?.password}
          {...register("password")}
        />

        <Button variant={ButtonVariant.CLEAR}>Забыли пароль?</Button>
        <Button disabled={!isValid} fullWidth>
          Войти
        </Button>
      </Form>
      <div className={cls.footer}>
        Еще нет аккаунта?
        <Button variant={ButtonVariant.CLEAR} onClick={onOpenRegister}>
          Регистрация
        </Button>
      </div>
    </div>
  );
};

export default Login;
