import { StyleSheet, TextInput, View } from 'react-native'
import { moderateScale, scale } from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Spacer } from '../framework';
import { Colors } from '../../constants';
const SearchBox = ({ searchText, setSearchText }) => {
    return (
        <View style={styles.container}>
            <AntDesign
                name="search1"
                size={15}
                color={Colors.PLACEHOLDER}
            />
            <Spacer value={6} />
            <TextInput
                style={styles.inputBox}
                placeholder="Enter something"
                value={searchText}
                onChangeText={setSearchText}
                placeholderTextColor={Colors.PLACEHOLDER}
            />
        </View>
    )
}

export default SearchBox

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.FADE,
        borderRadius: scale(8),
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: moderateScale(20),
        marginHorizontal: moderateScale(20),
        minWidth: moderateScale(200),
        maxWidth: moderateScale(200)

    },
    inputBox: {
        marginRight: moderateScale(7)
    },

})