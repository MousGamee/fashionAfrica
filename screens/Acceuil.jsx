import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView,
    Dimensions, 
    ImageBackground,
    TouchableOpacity,
    Image
} from 'react-native'
const WIDTH = Dimensions.get('window').width

const Acceuil = () => {
    return (
        <ScrollView style={{flex : 1, backgroundColor : 'white', paddingHorizontal : 10, width : WIDTH, marginTop : 10}}>
            <TouchableOpacity style={styles.defaultContainer}>
                <Text style={{color : 'white', fontSize : 13, marginBottom : 5}}>Livraison premium</Text>
                <Text style={{color : 'white', fontSize : 15, fontWeight : 'bold'}}>Livraison 24h illimité pendant 1 an</Text>
                <Text style={{color : 'white', fontSize : 15, fontWeight : 'bold'}}>pour 20€</Text>
                <Text style={{color : 'white', fontSize : 10, marginTop : 5}}>Offre remise a condition.</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <ImageBackground 
                source={require('../assets/banner1.png')}
                style={styles.defaultContainer}>
                <Text style={{color : 'white', fontSize : 13, fontWeight : "bold"}}>FashionAfrica est avec vous pendant </Text>
                    <Text style={{color : 'white', fontSize : 13, fontWeight : 'bold'}}>le confinement. Nous avons modifié nos</Text>
                    <Text style={{color : 'white', fontSize : 13, fontWeight : 'bold'}}>mos methods de livraisons pour les</Text>
                    <Text style={{color : 'white', fontSize : 13, fontWeight : 'bold'}}>rendre aussi sûres que possible.</Text>
                </ImageBackground> 
            </TouchableOpacity>

            <TouchableOpacity style={styles.bigContainer}>
                <Text style={{fontWeight : "bold", fontSize : 30}}>OUTLET</Text>
                <Text style={{fontWeight : "bold", fontSize : 30}}>JUSQU'À -70 %</Text>
                <Text style={{fontWeight : "bold", fontSize : 30}}>SUR PLUS DE 7000</Text>
                <Text style={{fontWeight : "bold", fontSize : 30, marginBottom : 5}}>ARTICLES</Text>
                <Text style={{fontWeight : "bold", fontSize : 13, marginBottom : 5}}>JUSQU'OU CA VA ALLER ?</Text>
                <Text style={{ fontSize : 9 }}>sur une selection d'article seulement</Text>
                <Text style={{ fontSize : 9}}>sur les prix deja demarqué</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bigContainer}>
                <ImageBackground 
                style={{width : '100%', height : '100%', flex : 1}}
                source={require('../assets/banner3.jpg')}>
                    <View style={{justifyContent : "center", alignItems : "center", marginTop : 45}}>
                       <Text style={{fontWeight : "bold", fontSize : 35, color : 'white'}}>Place</Text> 
                       <Text style={{fontWeight : "bold", fontSize : 30, color : 'white'}}>aux tons</Text> 
                       <Text style={{fontWeight : "bold", fontSize : 30, color : 'white'}}>neutres</Text> 
                    </View>
                    
                </ImageBackground>
            </TouchableOpacity>

            <View style={{flexDirection : 'row', justifyContent : "space-between"}}>
                <TouchableOpacity style={{width : '48%'}}>
                    <View style={{width : '100%', height : 200}}>
                        <Image
                        style={{width : null, height : null, resizeMode : "cover", flex : 1}}
                        source={require('../assets/kaymina.jpg')} />
                    </View>
                    <View style={{alignItems : "center", marginTop : 10}}>
                        <Text style={{fontWeight : 'bold', fontSize : 17}}>KayMina</Text>
                        <Text style={{color : 'lightgrey', textAlign : "center", fontSize : 15}}>Robe de soire sur mesure </Text>
                    </View>
                    
                </TouchableOpacity>
                <TouchableOpacity style={{width : '48%'}}>
                    <View style={{width : '100%', height : 200}}>
                        <Image
                        style={{width : null, height : null, resizeMode : "cover", flex : 1}}
                        source={require('../assets/afromag.jpg')} />
                    </View>
                    <View style={{alignItems : "center", marginTop : 10}}>
                        <Text style={{fontWeight : 'bold', fontSize : 17}}>Afro Mag</Text>
                        <Text style={{color : 'lightgrey', textAlign : "center", fontSize : 15}}>Chemise sur mesure </Text>
                    </View>                   
                </TouchableOpacity>
            </View>

            <View style={{flexDirection : 'row', justifyContent : "space-between", marginTop : 25}}>
                <TouchableOpacity style={{width : '48%'}}>
                    <View style={{width : '100%', height : 200}}>
                        <Image
                        style={{width : null, height : null, resizeMode : "cover", flex : 1}}
                        source={require('../assets/kaymina.jpg')} />
                    </View>
                    <View style={{alignItems : "center", marginTop : 10}}>
                        <Text style={{fontWeight : 'bold', fontSize : 17}}>KayMina</Text>
                        <Text style={{color : 'lightgrey', fontSize : 15}}>Wax, Basin, </Text>
                    </View>
                    
                </TouchableOpacity>
                <TouchableOpacity style={{width : '48%'}}>
                    <View style={{width : '100%', height : 200}}>
                        <Image
                        style={{width : null, height : null, resizeMode : "cover", flex : 1}}
                        source={require('../assets/kaymina.jpg')} />
                    </View>
                    <View style={{alignItems : "center", marginTop : 10}}>
                        <Text style={{fontWeight : 'bold', fontSize : 17}}>KayMina</Text>
                        <Text style={{color : 'lightgrey', textAlign : "center", fontSize : 15}}>Wax, Basin, </Text>
                    </View>                   
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity style={styles.bigContainer}>
                <ImageBackground 
                style={{width : '100%', height : '100%', flex : 1}}
                source={require('../assets/banner3.jpg')}>
                    <View style={{justifyContent : "center", alignItems : "center", marginTop : 45}}>
                       <Text style={{fontWeight : "bold", fontSize : 35, color : 'white'}}>Place</Text> 
                       <Text style={{fontWeight : "bold", fontSize : 30, color : 'white'}}>aux tons</Text> 
                       <Text style={{fontWeight : "bold", fontSize : 30, color : 'white'}}>neutres</Text> 
                    </View>           
                </ImageBackground>
            </TouchableOpacity>

        </ScrollView>
    )
}

export default Acceuil

const styles = StyleSheet.create({
   defaultContainer : {
       width : '100%', 
       height : 100, 
       backgroundColor : 'black', 
       justifyContent : "center", 
       alignItems : "center",
       marginBottom : 10
    },
    bigContainer : {
        width : '100%', 
        height : 250, 
        justifyContent : "center", 
        alignItems : "center",
        marginBottom : 10
    }
})
