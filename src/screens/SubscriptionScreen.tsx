import React,{useState} from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Page, Button } from '../components/UI';
import { COLORS } from '../theme';
const plans=[{name:'Weekly',price:'$4.90',detail:'Flexible access'},{name:'Monthly',price:'$14.90',detail:'Most popular'},{name:'Yearly',price:'$89.90',detail:'Best value'}];
export function SubscriptionScreen({onContinue}:{onContinue:()=>void}) {
 const [selected,setSelected]=useState('Monthly');
 return <Page title="Choose your subscription plan" subtitle="Get more from your Bluewave experience.">
 {plans.map(p=><TouchableOpacity key={p.name} onPress={()=>setSelected(p.name)} style={[s.plan,selected===p.name&&s.selected]}><View style={{flex:1}}><Text style={s.name}>{p.name}</Text><Text style={s.detail}>{p.detail}</Text></View><Text style={s.price}>{p.price}</Text><Text style={s.radio}>{selected===p.name?'●':'○'}</Text></TouchableOpacity>)}
 <View style={s.note}><Text style={s.noteTitle}>Your plan includes</Text><Text style={s.noteText}>✓ Unlimited access to features</Text><Text style={s.noteText}>✓ Personalised recommendations</Text><Text style={s.noteText}>✓ Cancel anytime</Text></View>
 <Button title="Continue" onPress={onContinue}/>
 </Page>;
}
const s=StyleSheet.create({plan:{backgroundColor:'#fff',padding:16,borderRadius:14,borderWidth:1,borderColor:'#EDF0F5',marginTop:12,flexDirection:'row',alignItems:'center',gap:10},selected:{borderColor:COLORS.blue,backgroundColor:'#F5F9FF'},name:{fontSize:14,fontWeight:'800',color:COLORS.text},detail:{fontSize:11,color:COLORS.muted,marginTop:4},price:{fontSize:14,fontWeight:'800',color:COLORS.text},radio:{color:COLORS.blue,marginLeft:4},note:{backgroundColor:'#fff',padding:16,borderRadius:14,marginTop:20},noteTitle:{fontSize:14,fontWeight:'800',marginBottom:10,color:COLORS.text},noteText:{fontSize:12,color:COLORS.muted,marginTop:7}});
