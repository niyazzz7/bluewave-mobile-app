import React,{useState} from 'react';
import { Text, View, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Page, Field, Button } from '../components/UI';
import { COLORS } from '../theme';
export function AuthScreen(){
 const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [mode,setMode]=useState<'login'|'signup'|'code'>('login');
 const submit=()=>{if(!email.trim()){Alert.alert('Required','Please enter your email or phone number.');return;} if(mode==='code'){Alert.alert('Verification','Demo verification code accepted.');return;} if(!password.trim()){Alert.alert('Required','Please enter your password.');return;} Alert.alert('Welcome','This is a demo sign-in flow.');};
 return <Page title={mode==='login'?'Welcome back!':mode==='signup'?'Create account':'Enter verification code'} subtitle={mode==='code'?'We sent a 4-digit code to your contact.':'Sign in to continue to your account.'}>
 <View style={s.illustration}><Text style={{fontSize:44}}>✧</Text><Text style={s.illText}>BLUEWAVE</Text></View>
 <Field label="Email or phone" placeholder="Enter email or phone" value={email} onChangeText={setEmail}/>
 {mode!=='code'&&<Field label="Password" placeholder="Enter your password" value={password} onChangeText={setPassword} secureTextEntry/>}
 {mode==='code'&&<Field label="4-digit code" placeholder="• • • •" />}
 <TouchableOpacity onPress={()=>setMode('code')}><Text style={s.forgot}>Forgot password?</Text></TouchableOpacity>
 <Button title={mode==='login'?'Log in':mode==='signup'?'Create account':'Verify'} onPress={submit}/>
 <TouchableOpacity onPress={()=>setMode(mode==='login'?'signup':'login')} style={{marginTop:18}}><Text style={s.switch}>{mode==='login'?"Don't have an account? Sign up":'Already have an account? Log in'}</Text></TouchableOpacity>
 <Text style={s.or}>or continue with</Text><View style={s.social}><Text style={s.socialItem}>G</Text><Text style={s.socialItem}>●</Text><Text style={s.socialItem}>f</Text></View>
 </Page>;
}
const s=StyleSheet.create({illustration:{height:110,backgroundColor:'#EAF2FF',borderRadius:18,alignItems:'center',justifyContent:'center',marginBottom:7},illText:{fontSize:9,fontWeight:'900',letterSpacing:3,color:COLORS.blue},forgot:{color:COLORS.blue,fontSize:11,textAlign:'right',marginTop:12,fontWeight:'700'},switch:{color:COLORS.blue,fontSize:12,textAlign:'center',fontWeight:'700'},or:{textAlign:'center',color:COLORS.muted,fontSize:11,marginTop:22},social:{flexDirection:'row',justifyContent:'center',gap:14,marginTop:12},socialItem:{width:36,height:36,textAlign:'center',textAlignVertical:'center',borderRadius:18,overflow:'hidden',backgroundColor:'#F0F3F8',fontWeight:'800',color:COLORS.text}});
