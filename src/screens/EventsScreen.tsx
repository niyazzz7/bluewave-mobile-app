import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Page } from '../components/UI';
import { COLORS } from '../theme';
const events=[['Design Meetup','12 Nov 2026','Creative Hub','✦'],['City Run Club','15 Nov 2026','Central Park','⌁'],['Startup Weekend','21 Nov 2026','Innovation Space','◇']];
export function EventsScreen(){return <Page title="Upcoming events" subtitle="Discover experiences and meet your community.">
 <View style={s.feature}><Text style={s.featureTag}>FEATURED EVENT</Text><Text style={s.featureTitle}>Make new connections</Text><Text style={s.featureSub}>Find events that inspire you.</Text></View>
 <Text style={s.heading}>Your events</Text>{events.map(([name,date,place,icon])=><View key={name} style={s.card}><View style={s.dateIcon}><Text style={{fontSize:23,color:COLORS.blue}}>{icon}</Text></View><View style={{flex:1}}><Text style={s.name}>{name}</Text><Text style={s.detail}>{date} · {place}</Text></View><TouchableOpacity onPress={()=>Alert.alert('Event details',`${name}\\n${date} · ${place}`)}><Text style={s.arrow}>›</Text></TouchableOpacity></View>)}
 </Page>}
const s=StyleSheet.create({feature:{backgroundColor:'#EAF2FF',borderRadius:18,padding:18,marginTop:10},featureTag:{fontSize:9,fontWeight:'900',letterSpacing:1,color:COLORS.blue},featureTitle:{fontSize:20,fontWeight:'900',color:COLORS.text,marginTop:14},featureSub:{fontSize:11,color:COLORS.muted,marginTop:5},heading:{fontSize:16,fontWeight:'800',color:COLORS.text,marginTop:24,marginBottom:8},card:{backgroundColor:'#fff',borderRadius:14,padding:12,flexDirection:'row',alignItems:'center',gap:12,marginTop:9},dateIcon:{width:52,height:52,borderRadius:12,backgroundColor:'#EAF2FF',alignItems:'center',justifyContent:'center'},name:{fontSize:12,fontWeight:'800',color:COLORS.text},detail:{fontSize:10,color:COLORS.muted,marginTop:5},arrow:{fontSize:22,color:'#AAB3C0'}});
