import React from "react";
import cls from "./loading.module.scss";
import Spinner from "../../Spinner/Spinner";

const Loading = () => {
  return (
    <div className={cls.loading}>
      <Spinner />
    </div>
  );
};

export default Loading;
