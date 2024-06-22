import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'

interface CustomTextInputProps {
    text?: string;
    onChange?: (text: string) => void;
    multiline?: boolean;
    placeholder: string;
    numberOfLines: number;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
    text,
    onChange,
    multiline = false,
    placeholder,
    numberOfLines,
}) => (
    <View style={styles.container}>
        <TextInput
            multiline={multiline}
            numberOfLines={numberOfLines}
            style={styles.input}
            placeholder={placeholder}
            onChangeText={onChange}
            defaultValue={text}
        />
    </View>
)

const styles = StyleSheet.create({
    input: {
        borderWidth: 2,
        borderColor: '#DDDDDD',
        padding: 10,
    },
    container: {
        marginTop: 20,
    },
})

export default CustomTextInput