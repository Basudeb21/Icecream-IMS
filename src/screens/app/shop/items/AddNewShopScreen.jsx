import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AddNewShop } from '../../../../api/app-funtion';
import { Header, InputBoxWithLabel, Spacer, SubmitButton } from '../../../../components/framework';
const AddNewShopScreen = () => {
    const navigation = useNavigation();
    const [shopName, setShopName] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [whatsAppNumber, setWhatsAppNumber] = useState('');
    const [address, setAddress] = useState('');
    const handleSubmit = async () => {
        if (!shopName || !ownerName || !whatsAppNumber || !address) {
            alert("Please fill all the fields");
            return;
        }

        await AddNewShop(shopName, ownerName, whatsAppNumber, address);

        setShopName('');
        setOwnerName('');
        setWhatsAppNumber('');
        setAddress('');
        navigation.goBack();
    };
    return (
        <View>
            <Header name={"Add New Shop"} isSerchReq={false} />
            <View>
                <View style={{ flexDirection: "row" }}>
                    <InputBoxWithLabel
                        label={"Shop Name"}
                        placeholder={"Enter shop name"}
                        value={shopName}
                        onChangeText={setShopName}
                    />
                    <InputBoxWithLabel
                        label={"Owner Name"}
                        placeholder={"Enter shop owner name"}
                        value={ownerName}
                        onChangeText={setOwnerName}
                    />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <InputBoxWithLabel
                        label={"Whatsapp Number"}
                        placeholder={"Enter whats-app number"}
                        value={whatsAppNumber}
                        onChangeText={setWhatsAppNumber}
                    />
                    <InputBoxWithLabel
                        label={"Address"}
                        placeholder={"Enter shop address"}
                        value={address}
                        onChangeText={setAddress}
                    />
                </View>
                <Spacer height={20} />
                <SubmitButton text={"Save"} onPress={handleSubmit} />

            </View>
        </View>
    )
}

export default AddNewShopScreen
