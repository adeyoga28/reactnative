import { Text, View } from "react-native";

const fullName = (firstName, lastName) => firstName + " " + lastName;

const Cat = (props) => {
    const firstName = props.firstName
    const lastName = props.lastName
    return (
        <View>
            <Text>Nama: { fullName(firstName, lastName) }</Text>
            <Text>Julukan: { firstName }</Text>
        </View>

    );
}

export default Cat;
