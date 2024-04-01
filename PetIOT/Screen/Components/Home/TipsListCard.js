import React, { useState } from 'react';
import {View,StyleSheet,Alert,ScrollView, Pressable,TouchableHighlight, TouchableOpacity} from 'react-native';
import {Button,Card,Text,Appbar} from 'react-native-paper';
import TipsCard from './TipsCard';



export default function TipsListCard() {
    const [showAll, setShowAll] = useState(false);

    // Dữ liệu mẫu cho các tips
    const tipsData = [
        { id: 1, title: 'Tip 1', description: 'Tip description 1' },
        { id: 2, title: 'Tip 2', description: 'Tip description 2' },
        { id: 3, title: 'Tip 3', description: 'Tip description 3' },
        { id: 4, title: 'Tip 4', description: 'Tip description 4' },
        { id: 5, title: 'Tip 5', description: 'Tip description 5' },
        { id: 6, title: 'Tip 6', description: 'Tip description 6' },
    ];

    // Render danh sách các TipsCard
    const renderTipsCards = () => {
        const dataToShow = showAll ? tipsData : tipsData.slice(0, 3); // Hiển thị tất cả hoặc chỉ 3 phần tử đầu tiên
        return dataToShow.map(tip => (
            <TipsCard
                key={tip.id}
                title={tip.title}
                description={tip.description}
            />
        ));
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {renderTipsCards()}
            {tipsData.length > 3 && (
                <TouchableOpacity style={styles.toggleButton} onPress={() => setShowAll(!showAll)}>
                    <Text>{showAll ? 'Show Less' : 'Show More'}</Text>
                </TouchableOpacity>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingVertical: 20,
    },
    toggleButton: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#f0f0f0',
    },
});