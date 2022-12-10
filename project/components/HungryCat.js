import { useState } from "react";
import { Button, Text, View } from "react-native"

const HungryCat = (props) => {
    const [ isLapar, setIsLapar ] = useState(true)

    return (
        <View>
            <Text>
                Halo Nama saya: {props.name}, 
                Sekarang saya: {isLapar ? 'Lapar' : 'Kenyang'}
            </Text>
            <Button 
                title={isLapar ? 'Beri Saya Makan!' : 'Terima Kasih.'}
                onPress={() => {
                    setIsLapar(false)
                }}
                disabled={!isLapar}
            />
        </View>
    )
}

export default HungryCat;
