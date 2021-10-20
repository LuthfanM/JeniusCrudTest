import themes from "../themes";

export default {
    searchSection: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',     
        marginRight: 5,
        marginLeft: 5,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 5,      
        borderColor: '#fff',
    },
    searchIcon: {
        marginRight: 20,
    },
    input: {
        flex: 1,
        marginLeft: 10,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        // backgroundColor: '#fff',
        // color: '#424242',
    },
    flatlistHeight:{
       ...themes.height,
       marginBottom: 100,
        // backgroundColor: 'red',
        flexGrow: 0
    },
    containerImage:{
        alignItems: 'center'
    },
    imageAds:{
        width: 200,
        height: 200,
    }, 
    textButton: {
        borderWidth: 1,
        textAlign: 'center',
        padding: 10,
        borderColor: 'black',
        color: 'white',
        // backgroundColor: 'red'
     }
}