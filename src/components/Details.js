import React ,{Component} from 'react';
import {View,TextInput,TouchableOpacity,Text} from 'react-native';
export default class Details extends Component {
    state={
        data:'',
        text:'',
        click:''
    }
    _onPressButton=()=>{
        fetch('/homefeed/storyUploadInfo', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fileName: this.state.data.fileName,
                id: this.state.data.id,
                link: 'www.google.com',
            }),
          }).then((res)=>{
                console.log('response',res)
          }).catch((err)=>{
                console.log('error',err);
          })
    }
    componentDidMount(){
        const {  resjson }=this.props.navigation.state.params;
        this.setState(()=>({data: resjson}))
    }
    render() {
        return (
            <View>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />
                <TouchableOpacity
                onPress={this._onPressButton}
                style={{ padding:10, backgroundColor: 'red' }} >
                    <Text>'SUBMIT'</Text>
                </TouchableOpacity>

            </View>
        )
    }
}
