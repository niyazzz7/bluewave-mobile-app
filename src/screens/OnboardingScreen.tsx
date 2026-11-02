import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Page, Button } from '../components/UI';
import { COLORS } from '../theme';
export function OnboardingScreen({onContinue}:{onContinue:()=>void}) {
  return <Page title="Personalise your experience" subtitle="A few quick steps to make Bluewave feel like yours.">
    <View style={s.art}><Text style={{fontSize:54}}>✦</Text><Text style={s.artText}>Your space. Your way.</Text></View>
    {['Choose your interests','Set your preferences','Discover what matters to you'].map((x,i)=><View key={x} style={s.option}><Text style={s.num}>{`0${i+1}`}</Text><Text style={s.optionText}>{x}</Text><Text style={{color:COLORS.blue}}>✓</Text></View>)}
    <Button title="Get started" onPress={onContinue}/>
  </Page>;
}
const s=StyleSheet.create({art:{height:190,borderRadius:22,backgroundColor:'#EAF2FF',alignItems:'center',justifyContent:'center',marginTop:14},artText:{fontSize:14,fontWeight:'800',color:COLORS.blue,marginTop:8},option:{backgroundColor:'#fff',padding:15,borderRadius:12,marginTop:10,flexDirection:'row',alignItems:'center',gap:12},num:{color:COLORS.blue,fontWeight:'800'},optionText:{flex:1,color:COLORS.text,fontSize:13,fontWeight:'600'}});
