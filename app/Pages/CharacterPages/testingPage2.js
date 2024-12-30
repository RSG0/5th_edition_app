import { ScrollView, StyleSheet, View } from 'react-native';
import SkillsButton from "../../../components/buttons/selectionButton"
import { useState } from 'react';
import { COLORS } from '../../../constants/theme';
import SpellModal from '../../../components/modals/spellModal(Rough)';
import SpellIconRough from '../../../components/spellIcon(Rough)';
import SpellModalRough from '../../../components/modals/spellModal(Rough)';

export default TestingPage = () => 
{

    return (
        <View style={{backgroundColor: COLORS.background, flex: 1, alignItems: 'center'}}>
            <SpellModalRough/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
