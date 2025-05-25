import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../../constants';
import SearchBox from '../micro-components/SearchBox';
import { useNavigation } from '@react-navigation/native';
const Header = ({ name, searchText, setSearchText, isSerchReq = true, color = Colors.WHITE, contentColor = Colors.BLACK }) => {

    const navigation = useNavigation();
    const handleBackPress = () => {
        navigation.pop();
    };
    const [isSearchShow, setIsSearchShow] = useState(true); // or false depending on default

    const handelOnPress = () => {
        setIsSearchShow(prev => !prev);
    };

    useEffect(() => {
        if ((searchText || '').trim() !== '') {
            setIsSearchShow(false);
        }
    }, [searchText]);

    return (
        <View style={[styles.container, { backgroundColor: color }]}>
            {isSearchShow && (
                <View style={styles.left}>
                    <TouchableOpacity onPress={handleBackPress}>
                        <AntDesign
                            name="arrowleft"
                            size={18}
                            color={contentColor}
                        />
                    </TouchableOpacity>
                    <Text style={[styles.title, { color: contentColor }]}>{name || "Title"}</Text>
                </View>
            )}
            {!isSearchShow && (
                <SearchBox searchText={searchText} setSearchText={setSearchText} />
            )}
            {
                isSerchReq && (
                    <View style={styles.right}>
                        <TouchableOpacity
                            onPress={handelOnPress}
                            style={[styles.searchBtnBg, { backgroundColor: isSearchShow ? Colors.THEME : Colors.RED }]}>
                            <AntDesign
                                name={isSearchShow ? "search1" : "close"}
                                size={15}
                                color={Colors.WHITE}
                            />
                            <Text style={styles.btnTxt}>{isSearchShow ? 'Search' : 'Close'}</Text>
                        </TouchableOpacity>
                    </View>
                )
            }

        </View>

    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        elevation: scale(2),
        backgroundColor: Colors.WHITE,
        width: "100%",
        paddingVertical: verticalScale(12),
        paddingHorizontal: moderateScale(20),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    left: {
        flex: 7,
        flexDirection: "row",
        alignItems: "center"
    },
    right: {
        flex: 3,

    },
    title: {
        fontSize: scale(18),
        fontWeight: "500",
        marginStart: moderateScale(20)
    },
    searchBtnBg: {
        backgroundColor: Colors.THEME,
        alignItems: "center",
        paddingVertical: verticalScale(7),
        paddingHorizontal: moderateScale(5),
        flexDirection: "row",
        borderRadius: scale(8),
        alignSelf: "flex-start",
    },
    btnTxt: {
        color: Colors.WHITE,
        marginHorizontal: moderateScale(5)
    }
})