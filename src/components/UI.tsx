import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../theme';

export function Page({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return <View style={u.page}><Text style={u.title}>{title}</Text>{subtitle ? <Text style={u.subtitle}>{subtitle}</Text> : null}{children}</View>;
}
export function Button({ title, onPress, secondary=false }: { title: string; onPress?: () => void; secondary?: boolean }) {
  return <TouchableOpacity onPress={onPress} style={[u.button, secondary && u.secondary]}><Text style={[u.buttonText, secondary && u.secondaryText]}>{title}</Text></TouchableOpacity>;
}
export function Field({ label, placeholder, value, onChangeText, secureTextEntry=false }: { label: string; placeholder: string; value?: string; onChangeText?: (v:string)=>void; secureTextEntry?: boolean }) {
  return <View style={u.fieldWrap}><Text style={u.label}>{label}</Text><TextInput style={u.input} placeholder={placeholder} placeholderTextColor="#AAB3C0" value={value} onChangeText={onChangeText} secureTextEntry={secureTextEntry} /></View>;
}
export function Card({ children, style }: { children: React.ReactNode; style?: ViewStyle }) {
  return <View style={[u.card,style]}>{children}</View>;
}
export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <View style={{marginTop:22}}><Text style={u.section}>{title}</Text>{children}</View>;
}
export const u = StyleSheet.create({
  page:{flex:1,padding:20},title:{fontSize:25,fontWeight:'800',color:COLORS.text,marginTop:8},subtitle:{fontSize:13,lineHeight:20,color:COLORS.muted,marginTop:7,marginBottom:18},
  button:{backgroundColor:COLORS.blue,borderRadius:11,paddingVertical:14,alignItems:'center',justifyContent:'center',marginTop:14},buttonText:{color:'#fff',fontSize:13,fontWeight:'800'},
  secondary:{backgroundColor:'#fff',borderWidth:1,borderColor:'#DCE6F5'},secondaryText:{color:COLORS.blue},
  fieldWrap:{marginTop:13},label:{fontSize:11,fontWeight:'700',color:'#526075',marginBottom:7},input:{height:47,borderWidth:1,borderColor:'#E0E7F1',backgroundColor:'#fff',borderRadius:10,paddingHorizontal:13,fontSize:13,color:COLORS.text},
  card:{backgroundColor:'#fff',borderRadius:15,padding:15,marginTop:11,borderWidth:1,borderColor:'#F0F2F7'},section:{fontSize:16,fontWeight:'800',color:COLORS.text,marginBottom:7},
  muted:{color:COLORS.muted,fontSize:12},row:{flexDirection:'row',alignItems:'center',justifyContent:'space-between'},pill:{backgroundColor:'#EAF2FF',paddingHorizontal:10,paddingVertical:6,borderRadius:20}
});