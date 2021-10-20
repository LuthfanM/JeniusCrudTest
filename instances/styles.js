import themes from "../themes";

export default {
    item: {
        backgroundColor: '#ffffff',
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 5,
        shadowOffset: { width: 200, height: 200, },
        shadowColor: '#000',
        shadowOpacity: 1.0,
        borderWidth: 1,
        // borderColor: '#ffffff',
        borderRadius: 10,        
        borderLeftColor: '#53b789',
        borderTopColor: '#ffffff',
        borderRightColor : '#ffffff',
        borderBottomColor : '#ffffff',
        borderLeftWidth : 10,
        marginRight: 5
    },

    item2:{
        ...themes.bgWhite,
        flex: 1,
        flexDirection: 'row'
        // alignSelf: 'stretch',
        // height: '100%',
    },

    contentData: {
        justifyContent: 'flex-start',
    },

    smallWindow:{        
        flexDirection: 'row',
        marginLeft: 'auto',
        width: 150,
        alignItems: 'center',    
        backgroundColor: '#53b789',
        padding: 10,        
        marginVertical: 5,
        marginHorizontal: 5,        
        // marginLeft: 100,
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 10,
    },
    bankRow:{
        flex: 1,
        flexDirection: 'row'
    },
    filterItem: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
    photos:{
        width: 66,
    height: 58,
    }
}
