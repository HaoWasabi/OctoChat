import {
  TextInput,
  Text,
  StyleSheet,
  TextInputProps,
  View,
} from "react-native";
import { universalStyles } from "../assets/styles/styles";
import {
  LegacyRef,
  MutableRefObject,
  RefAttributes,
  useRef,
  useState,
} from "react";

type textContentType =
  | "none"
  | "URL"
  | "addressCity"
  | "addressCityAndState"
  | "addressState"
  | "countryName"
  | "creditCardNumber"
  | "creditCardExpiration"
  | "creditCardExpirationMonth"
  | "creditCardExpirationYear"
  | "creditCardSecurityCode"
  | "creditCardType"
  | "creditCardName"
  | "creditCardGivenName"
  | "creditCardMiddleName"
  | "creditCardFamilyName"
  | "emailAddress"
  | "familyName"
  | "fullStreetAddress"
  | "givenName"
  | "jobTitle"
  | "location"
  | "middleName"
  | "name"
  | "namePrefix"
  | "nameSuffix"
  | "nickname"
  | "organizationName"
  | "postalCode"
  | "streetAddressLine1"
  | "streetAddressLine2"
  | "sublocality"
  | "telephoneNumber"
  | "username"
  | "password"
  | "newPassword"
  | "oneTimeCode"
  | "birthdate"
  | "birthdateDay"
  | "birthdateMonth"
  | "birthdateYear"
  | undefined;


type probs = {
  ref?: LegacyRef<TextInput>;
  label: string;
  placeholder: string;
} & TextInputProps;

export const InputGroup = ({
  ref,
  label,
  placeholder,
  textContentType,
  children,
  ...otherProbs
}: probs) => {
  const styles = StyleSheet.create({
    label: {
      color: "white",
      fontSize: 18,
      width: "100%",
      paddingTop: "5%",
    },
  });
  const hiddenInput: textContentType[] = [
    "password",
    "creditCardSecurityCode",
    "newPassword",
  ];
  const [testState, setState] = useState("");

  return (
    <>
      <Text style={styles.label}>{label ?? "unknow"}</Text>
      <TextInput
        ref={ref}
        {...otherProbs}
        textContentType={textContentType}
        secureTextEntry={hiddenInput.includes(textContentType) ? true : false}
        style={universalStyles.input}
        placeholder={placeholder ?? ""}
      />
    </>
  );
};
