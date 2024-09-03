// CharacterCarousel.js
import React, { useRef } from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import CharacterPage1 from './characterPage1';
import CharacterPage2 from './characterPage2';
import CharacterPage3 from './characterPage3';

const { width: screenWidth } = Dimensions.get('window');

export default CharacterCarousel =() => 
 {
    const flatListRef = useRef(null);

    const data = [
        { key: '1', component: <CharacterPage1 /> },
        { key: '2', component: <CharacterPage2 /> },
        { key: '3', component: <CharacterPage3 /> },

    ];

    const renderItem = ({ item }) => {
        return (
            <View style={{ width: screenWidth }}>
                {item.component}
            </View>
        );
    };

    return (
        <FlatList
            ref={flatListRef}
            data={data}
            renderItem={renderItem}
            horizontal
            bounces={false}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.key}
        />
    );
}
