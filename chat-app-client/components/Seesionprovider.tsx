import { createContext, useContext, type PropsWithChildren } from "react";
import { Alert } from "react-native";
import { useStorageState } from "../hooks/useStorageState";
import { validateEmail } from "../utility/checkValidate";
import { router } from "expo-router";

const AuthContext = createContext<{
  signIn: (email: string, password: string) => void;
  signOut: () => void;
  isLoading: boolean;
  session?: string | null;
}>({
  signIn: (email, password) => null,
  signOut: () => null,
  isLoading: false,
  session: null,
});

export function useSession() {
  const value = useContext(AuthContext);
  if (!value) {
    throw new Error("useSession must be wrapped in a <SessionProvider />");
  }

  return value;
}

const SessionProvider = ({ children }: PropsWithChildren) => {
  const [[isLoading, session], setSession] = useStorageState("session");
  return (
    <AuthContext.Provider
      value={{
        signIn: async (email, password) => {
          console.log(email, password);
          if (!email || !password) {
            Alert.alert(
              "Lỗi định dạng",
              "Không thể bỏ trống email hoặc password"
            );
            return;
          }
          if (!validateEmail(email)) {
            Alert.alert(
              "Lỗi định dạng",
              "Email không đúng định dạng vui lòng nhập lại"
            );
            return;
          }
          if (password.length < 8) {
            Alert.alert("Lỗi định dạng", "Mật khẩu phải ít nhất 8 ký tự");
            return;
          }
          try {
            const res = await fetch(
              `${process.env.EXPO_PUBLIC_SERVER_URL}/user/login`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
              }
            );

            if (!res.ok) {
              Alert.alert(
                "Lỗi request",
                "đã xảy ra lỗi trong lúc đăng nhập vui lòng thử lại"
              );
              return;
            }
            const result = await res.json();
            console.log(result);
            if (!result.result) {
              Alert.alert("Lỗi xác thực", "Không đúng email hoặc mật khẩu");
              return;
            }
            const { id, user_name } = result.result[0];
            setSession(`${JSON.stringify({ id, user_name })}`);
            // console.log(session);
            router.push(`/${id}/1`);
          } catch (error) {
            console.error(error);
          }
        },
        signOut: () => {
          setSession(null);
          router.replace("/");
        },
        isLoading,
        session,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default SessionProvider;
