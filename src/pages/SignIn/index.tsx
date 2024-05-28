import React, { useEffect } from "react";
import Wrapper from "UI/Wrapper/index.style";
import Container from "UI/Container/index.style";
import { ReactComponent as Logo } from "images/logo.svg";
import colors from "styles/constants";
import Input from "UI/Input";
import StyledLink from "UI/Link/index.style";
import SigninStyle from "./signin.style";
import Button from "UI/Button/index.style";
import { useForm } from "react-hook-form";
import { hashPass } from "helpers";
import useQuery from "hooks/queries";
import { toast } from "react-toastify";

type FormSubmitArgsType = {
  login: string;
  password: string;
};

function SignIn() {
  const { register, handleSubmit, reset } = useForm<FormSubmitArgsType>();
  const [signIn, { data, error, isLoading }] = useQuery();

  const onSubmit = ({ login, password }: FormSubmitArgsType) => {
    const encryptedPass = hashPass(password);
    const formData = new FormData();
    formData.append("login", login);
    formData.append("passHash", encryptedPass);
    signIn({ data: formData, method: "post" });
  };

  useEffect(() => {
    if (data) {
      reset({ login: "", password: "" });
      toast.dismiss();
      toast(data.message, { type: "success", autoClose: false });
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      toast.dismiss();
      toast(error.message, { type: "error" });
    }
  }, [error]);

  useEffect(() => {
    if (isLoading) {
      toast.loading("Загрузка...", {
        closeButton: false,
        closeOnClick: false,
        draggable: false,
        pauseOnHover: false,
      });
    }
  }, [isLoading]);

  return (
    <SigninStyle>
      <Container size="lg">
        <Wrapper
          className="signin__links"
          direction="row"
          justify="flex-end"
          gap={20}
        >
          <StyledLink to="#" size={17} mr={30}>
            ENG
          </StyledLink>
          <StyledLink to="#" size={17} font="Montserrat">
            ВХОД
          </StyledLink>
          <StyledLink to="#" size={17} font="Montserrat" color={colors.btnBlue}>
            РЕГИСТРАЦИЯ
          </StyledLink>
        </Wrapper>
      </Container>
      <Container className="signin__form-container">
        <Logo className="signin__logo" />
        <h1 className="signin__title">Войти</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Wrapper className="signin__form-wrapper" gap={28}>
            <Input
              label="Email / телефон"
              inputProps={{
                ...register("login", { required: true }),
                placeholder: "Email или номер телефона",
                size: 25,
              }}
            />
            <div>
              <Input
                label="Пароль"
                inputProps={{
                  ...register("password", { required: true }),
                  placeholder: "Введите пароль",
                  size: 25,
                  type: "password",
                }}
              />
              <StyledLink
                to="#"
                mt={8}
                color={colors.btnBlue}
                font="Montserrat"
                size={22}
              >
                Забыли пароль?
              </StyledLink>
            </div>
          </Wrapper>
          <Button className="signin__form-btn" disabled={isLoading}>
            Войти
          </Button>
        </form>
      </Container>
    </SigninStyle>
  );
}

export default SignIn;
