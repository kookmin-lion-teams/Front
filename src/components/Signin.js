import styles from "../CSS/Signin.module.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Toggle from "./Toggle";
import { useActions } from "../store/StateLogin";

function SignIn() {
  const { setLoginState } = useActions();
  const [isUser, setIsUser] = useState(true);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      const endpoint = isUser
        ? "/back/api/user/login"
        : "/back/api/partner/login";

      // uid를 pid로 변경
      if (!isUser) {
        formData.pid = formData.uid;
        delete formData.uid;
      }

      const response = await axios.post(endpoint, formData);
      console.log("로그인 성공:", response.data);
      // localStorage.setItem("id", isUser ? formData.uid : formData.pid);
      setLoginState(isUser ? formData.uid : formData.pid);
      navigate(`/`);
    } catch (error) {
      console.error("로그인 실패:", error.response?.data || error.message);
    }
  };

  const handleToggle = (isUser) => {
    setIsUser(isUser);
  };

  return (
    <>
      <div className={styles.frameBox}>
        <div className={styles.contentBox}>
          <div className={styles.loginContainer}>
            <Toggle
              left="유저 로그인"
              right="파트너 로그인"
              onToggle={handleToggle}
            />

            <div className={styles.loginForm}>
              <h2>로그인 하세요</h2>

              <form
                className={styles.formform}
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="uid">
                    아이디
                  </label>
                  <input
                    className={styles.formInput}
                    id="uid"
                    type="text"
                    placeholder="아이디 입력"
                    {...register("uid", {
                      required: "아이디는 필수 입니다.",
                    })}
                    aria-invalid={
                      isSubmitted ? (errors.uid ? "true" : "false") : undefined
                    }
                  />
                  {errors.uid && <p>{errors.uid.message}</p>}{" "}
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="password">
                    비밀번호
                  </label>
                  <input
                    className={styles.formInput}
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder="비밀번호 입력"
                    {...register("pw", {
                      required: "비밀번호는 필수 입니다.",
                      minLength: {
                        value: 1,
                        message: "비밀번호는 1자 이상입니다.",
                      },
                    })}
                    aria-invalid={errors.pw ? "true" : "false"}
                  />
                  {errors.pw && <p>{errors.pw.message}</p>}
                </div>
                <button
                  className={styles.submitButton}
                  type="submit"
                  disabled={isSubmitting}
                >
                  로그인
                </button>
              </form>
              <p className={styles.signupLink}>
                처음이신가요?
                <Link className={styles.signupLinkText} to="/signup">
                  회원가입하기
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
