const React = require("react-native");
const { Dimensions } = React;
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default {

    fl1:{
        flex: 1
    },

    white:{
        color: '#ffffff',
    },

    bgWhite: {
        backgroundColor: '#ffffff',
    },

    global: {
        deviceWidth: deviceWidth,
        deviceHeight: deviceHeight
    },

    fullWidth: {
        width: deviceWidth
    },
    
    bold: { fontWeight: 'bold' },
    italic: { fontStyle: 'italic' },
    underline: { textDecorationLine: 'underline' },

    height:{
        height: deviceHeight
    },

    fullHeight:{
        height: '100%'
    },

}