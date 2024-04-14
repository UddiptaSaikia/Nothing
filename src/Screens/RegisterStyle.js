import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#02061A",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: "5%",
    paddingLeft: "5%",
    width: "100%",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
  },
  titleContainer: {
    flexDirection: "row",
  },
  text: {
    marginLeft: 19,
    fontSize: 14,
    fontWeight: "bold",
  },
  whiteText: {
    color: "white",
  },
  blueText: {
    color: "#23B8F9",
  },
  avatarContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "22%",
    width: "99%",
  },
  avatarWrapper: {
    borderRadius: 15,
    width: 60,
    height: 60,
    backgroundColor: "lightgrey",
    justifyContent: "center",
    alignItems: "center",
  },
  helloContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "22%",
    marginTop: "1%",
    width: "99%",
  },
  helloWrapper: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  nameContainer: {
    marginBottom: 10,
    marginTop: "5%",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
  },
  phoneContainer: {
    marginBottom: 10,
    width: "95%",
    justifyContent: "center",
  },
  rowContainer: {
    flexDirection: "row",
    marginBottom: 10,
    width: "99%",
  },
  dateContainer: {
    flex: 1,
    marginRight: "2%",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  dobIcon: {
    marginLeft: "-20%",
  },
  genderContainer: {
    flex: 1,
    backgroundColor: "#0E1433",
    borderRadius: 10,
    height: 40,
    justifyContent: "center",
    marginRight: "4%",
  },
  countryContainer: {
    flex: 1,
    backgroundColor: "#0E1433",
    borderRadius: 10,
    height: 40,
    justifyContent: "center",
    marginRight: "2%",
  },
  stateContainer: {
    flex: 1,
    backgroundColor: "#0E1433",
    borderRadius: 10,
    height: 40,
    justifyContent: "center",
    marginRight: "4%",
  },
  label: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },
  input: {
    backgroundColor: "#0E1433",
    height: 40,
    width: "100%",
    borderRadius: 10,
    paddingHorizontal: 10,
    color: "white",
    textAlignVertical: "center",
    paddingVertical: 5,
    paddingLeft: 18,
  },
  placeholder: {
    color: "rgba(255, 255, 255, 0.5)",
  },
  registerButton: {
    width: "95%",
    backgroundColor: "rgba(213, 215, 144, 0.5)",
    opacity: 0.7,
    paddingVertical: 10,
    marginTop: 60,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: "center",
    height: "5%",
    justifyContent: "center",
    paddingVertical: 2,
  },
  buttonText: {
    color: "white",
    fontSize: 19,
    //fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    marginTop: 1,
    width: "95%",
  },
  linkText: {
    fontSize: 12,
    color: "red",
  },
  termsText: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.5)",
  },
  pickerItem: {
    fontSize: 15,
    //color: "white",
  },
});

export default styles;
