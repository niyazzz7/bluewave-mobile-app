import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Page, Card } from '../components/UI';
import { COLORS } from '../theme';
const items=['Personal information','Notifications','Privacy','Appearance','Language','Help & support'];
export function SettingsScreen(){return <Page title="Settings" subtitle="Manage your account and preferences.">
 <View style={s.profile}><View style={s.avatar}><Text style={{fontSize:24,color:COLORS.blue,fontWeight:'800'}}>A</Text></View><Text style={s.name}>Alex Morgan</Text><Text style={s.email}>alex.morgan@email.com</Text></View>
 <Card>{items.map((x,i)=><TouchableOpacity key={x} style={[s.item,i!==items.length-1&&s.border}><Text style={s.itemText}>{x}</Text><Text style={s.arrow}>›</Text></TouchableOpacity>)}</Card>
 <Card><TouchableOpacity style={s.item}><Text style={{color:'#E25555',fontWeight:'700'}}>Log out</Text><Text style={s.arrow}>›</Text></TouchableOpacity></Card>
 </Page>}
const s=StyleSheet.create({profile:{alignItems:'center',padding:18,backgroundColor:'#fff',borderRadius:16,marginTop:12},avatar:{width:70,height:70,borderRadius:35,backgroundColor:'#EAF2FF',alignItems:'center',justifyContent:'center'},name:{fontSize:16,fontWeight:'800',color:COLORS.text,marginTop:10},email:{fontSize:11,color:COLORS.muted,marginTop:4},item:{height:48,flexDirection:'row',alignItems:'center',justifyContent:'space-between'},border:{borderBottomWidth:1,borderBottomColor:'#F0F2F6'},itemText:{fontSize:12,color:COLORS.text,fontWeight:'600'},arrow:{fontSize:21,color:'#AAB3C0'}});
