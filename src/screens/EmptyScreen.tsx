import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Page, Button } from '../components/UI';
import { COLORS } from '../theme';
export function EmptyScreen(){return <Page title="Saved items" subtitle="Your collection will appear here."><View style={s.wrap}><View style={s.icon}><Text style={{fontSize:40}}>▧</Text></View><Text style={s.title}>Nothing here, for now</Text><Text style={s.text}>When you save something, it will show up in this space.</Text><Button title="Explore items"/></View></Page>}
const s=StyleSheet.create({wrap:{flex:1,alignItems:'center',justifyContent:'center',paddingBottom:70},icon:{width:100,height:100,borderRadius:24,backgroundColor:'#EAF2FF',alignItems:'center',justifyContent:'center'},title:{fontSize:17,fontWeight:'800',color:COLORS.text,marginTop:20},text:{fontSize:12,color:COLORS.muted,textAlign:'center',lineHeight:19,marginTop:8,maxWidth:240}});
