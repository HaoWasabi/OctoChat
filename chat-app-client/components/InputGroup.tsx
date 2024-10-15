import {
  TextInput,
  Text,
  StyleSheet,
  TextInputProps,
  View,
} from "react-native";
import { universalStyles } from "../assets/styles/styles";

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
  label: string;
  placeholder: string;
  textContentType?: textContentType;
};

export const InputGroup = ({ label, placeholder, textContentType }: probs) => {
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

  return (
    <>
      <Text style={styles.label}>{label ?? "unknow"}</Text>
      <TextInput
        textContentType={textContentType}
        secureTextEntry={hiddenInput.includes(textContentType) ? true : false}
        style={universalStyles.input}
        placeholder={placeholder ?? ""}
      />
    </>
  );
};
