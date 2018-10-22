import {
    StyleSheet,
    Platform,
    Dimensions
} from 'react-native';
import COLORS from '../../constants/Colors';
const window = Dimensions.get('window');


export default StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: COLORS.WHITE
    },
    normalText: {
        fontSize: 20,
        color: COLORS.BLACK,
        alignItems: 'center'
    },
    imageStyle: {
        width: 100,
        height: 100,
        overflow: 'hidden',
        alignItems: 'center',
        position: 'relative',
    }
});