import styles from "../CSS/Signin.module.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Toggle from "./Toggle";
import { useActions } from "../store/StateLogin";

function Signup() {
  const { setLoginState } = useActions();

  const [isUser, setIsUser] = useState(true);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const endpoint = isUser
        ? "/back/api/user/register"
        : "/back/api/partner/register";

      // FormData 객체 생성
      const formDataToSend = new FormData();

      // 모든 필드를 FormData에 추가
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          // 파일의 경우
          if (key === "img" && data[key].length > 0) {
            formDataToSend.append(key, data[key][0]);
          } else {
            formDataToSend.append(key, data[key]);
          }
        }
      }

      // uid를 pid로 변경
      if (!isUser) {
        formDataToSend.set("pid", formDataToSend.get("uid"));
        formDataToSend.delete("uid");
      }

      // FormData 객체를 콘솔에 찍기
      for (let pair of formDataToSend.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }

      const response = await axios.post(endpoint, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("회원가입 성공:", response.data);
      setLoginState(data.name);
      sessionStorage.setItem(
        isUser ? "uid" : "pid",
        isUser ? data.uid : data.pid
      );
      sessionStorage.setItem("name", data.name);
      sessionStorage.setItem("gu", data.gu);
      sessionStorage.setItem("dong", data.dong);
      sessionStorage.setItem("role", isUser ? 1 : 0);
      navigate(`/`);
    } catch (error) {
      console.error("회원가입 실패:", error.response?.data || error.message);
    }
  };

  const handleToggle = (isUser) => {
    setIsUser(isUser);
  };

  // 비밀번호 확인용 watch
  const pw = watch("pw");

  return (
    <div className="frameBox">
      <div className="contentBox">
        <div className={styles.loginContainer}>
          <Toggle
            left="유저 회원가입"
            right="파트너 회원가입"
            onToggle={handleToggle}
          />
          <div className={styles.loginForm}>
            <h2>회원가입하세요</h2>
            <form className={styles.formform} onSubmit={handleSubmit(onSubmit)}>
              {/* 아이디 */}
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
                {errors.uid && (
                  <small className={styles.errorMessage}>
                    {errors.uid.message}
                  </small>
                )}
              </div>
              {/* 비밀번호 */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="pw">
                  비밀번호
                </label>
                <input
                  className={styles.formInput}
                  id="pw"
                  type="password"
                  placeholder="비밀번호 입력"
                  {...register("pw", {
                    required: "비밀번호는 필수 입니다.",
                    minLength: {
                      value: 6,
                      message: "비밀번호는 최소 6자 이상이어야 합니다.",
                    },
                  })}
                  aria-invalid={errors.pw ? "true" : "false"}
                />
                {errors.pw && (
                  <small className={styles.errorMessage}>
                    {errors.pw.message}
                  </small>
                )}
              </div>
              {/* 비밀번호 확인 */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="confirmpw">
                  비밀번호 확인
                </label>
                <input
                  className={styles.formInput}
                  id="confirmpw"
                  type="password"
                  placeholder="비밀번호 확인"
                  {...register("confirmpw", {
                    required: "비밀번호 확인은 필수 입니다.",
                    validate: (value) =>
                      value === pw || "비밀번호가 일치하지 않습니다.",
                  })}
                  aria-invalid={errors.confirmpw ? "true" : "false"}
                />
                {errors.confirmpw && (
                  <small className={styles.errorMessage}>
                    {errors.confirmpw.message}
                  </small>
                )}
              </div>
              {/* 이름 */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="name">
                  이름
                </label>
                <input
                  className={styles.formInput}
                  id="name"
                  type="text"
                  placeholder="이름 입력"
                  {...register("name", {
                    required: "이름은 필수 입니다.",
                  })}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <small className={styles.errorMessage}>
                    {errors.name.message}
                  </small>
                )}
              </div>
              {/* 나이 */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="age">
                  나이
                </label>
                <input
                  className={styles.formInput}
                  id="age"
                  type="number"
                  placeholder="나이 입력"
                  {...register("age", {
                    required: "나이는 필수 입니다.",
                  })}
                  aria-invalid={errors.age ? "true" : "false"}
                />
                {errors.age && (
                  <small className={styles.errorMessage}>
                    {errors.age.message}
                  </small>
                )}
              </div>
              {/* 전화번호 */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="tel">
                  전화번호
                </label>
                <input
                  className={styles.formInput}
                  id="tel"
                  type="tel"
                  placeholder="전화번호 입력"
                  {...register("tel", {
                    required: "전화번호는 필수 입니다.",
                    pattern: {
                      value: /^[0-9]{10,11}$/,
                      message: "유효한 전화번호를 입력하세요.",
                    },
                  })}
                  aria-invalid={errors.tel ? "true" : "false"}
                />
                {errors.tel && (
                  <small className={styles.errorMessage}>
                    {errors.tel.message}
                  </small>
                )}
              </div>
              {/* 구 */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="gu">
                  구
                </label>
                <input
                  className={styles.formInput}
                  id="gu"
                  type="text"
                  placeholder="구 입력"
                  {...register("gu", {
                    required: "구는 필수 입니다.",
                  })}
                  aria-invalid={errors.gu ? "true" : "false"}
                />
                {errors.gu && (
                  <small className={styles.errorMessage}>
                    {errors.gu.message}
                  </small>
                )}
              </div>
              {/* 동 */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="dong">
                  동
                </label>
                <input
                  className={styles.formInput}
                  id="dong"
                  type="text"
                  placeholder="동 입력"
                  {...register("dong", {
                    required: "동은 필수 입니다.",
                  })}
                  aria-invalid={errors.dong ? "true" : "false"}
                />
                {errors.dong && (
                  <small className={styles.errorMessage}>
                    {errors.dong.message}
                  </small>
                )}
              </div>
              {/* 한줄소개 */}
              {isUser && (
                <div className={styles.formGroup}>
                  <label className={styles.formLabel} htmlFor="intro">
                    한 줄 소개
                  </label>
                  <input
                    className={styles.formInput}
                    id="intro"
                    type="text"
                    placeholder="저는 몸을 키우고 싶습니다."
                    {...register("intro", {
                      required: "한 줄 소개는 필수 입니다.",
                    })}
                    aria-invalid={errors.intro ? "true" : "false"}
                  />
                  {errors.intro && (
                    <small className={styles.errorMessage}>
                      {errors.intro.message}
                    </small>
                  )}
                </div>
              )}

              {/* 사진 */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="img">
                  사진
                </label>
                <input
                  className={styles.formInput}
                  id="img"
                  type="file"
                  accept="image/*"
                  {...register("img", {
                    required: "사진은 필수 입니다.",
                  })}
                  aria-invalid={errors.img ? "true" : "false"}
                />
                {errors.img && (
                  <small className={styles.errorMessage}>
                    {errors.img.message}
                  </small>
                )}
              </div>

              <button
                className={styles.submitButton}
                type="submit"
                disabled={isSubmitting}
              >
                회원가입
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
