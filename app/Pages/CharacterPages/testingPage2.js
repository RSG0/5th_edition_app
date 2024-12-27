import { ScrollView, StyleSheet, View } from 'react-native';
import SkillsButton from "../../../components/buttons/selectionButton"
import { useState } from 'react';

export default function SelectingSkillsScreen() {
    const skills = ['Skill 1', 'Skill 2', 'Skill 3'];
    const [selectedSkill, setSelectedSkill] = useState(null);

    const handleSelectionPress = (name) => {
        setSelectedSkill(name);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {skills.map((skill, index) => (
                <SkillsButton
                    key={index}
                    name={skill}
                    isSelected={selectedSkill === skill}
                    onSelectionPress={handleSelectionPress}
                />
            ))}
        </ScrollView>
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
